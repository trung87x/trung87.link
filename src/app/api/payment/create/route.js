import { payos } from "@/utils/payos";
import { auth } from "@/utils/auth";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

/**
 * @openapi
 * /api/payment/create:
 *   post:
 *     summary: Tạo link thanh toán PayOS
 *     description: API này dùng để tạo đơn hàng và lấy link thanh toán từ PayOS cho một khóa học cụ thể.
 *     tags:
 *       - Payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - courseId
 *             properties:
 *               courseId:
 *                 type: string
 *                 description: ID của khóa học cần mua (ví dụ react.school)
 *               amount:
 *                 type: number
 *                 description: Số tiền thanh toán (mặc định 500,000)
 *               description:
 *                 type: string
 *                 description: Mô tả thanh toán
 *     responses:
 *       200:
 *         description: Trả về thông tin link thanh toán từ PayOS
 *       401:
 *         description: Chưa đăng nhập
 *       500:
 *         description: Lỗi máy chủ hoặc cấu hình
 */
export async function POST(req) {
  try {
    // Check SQL connection before proceeding
    const supabase = await createClient();
    const { error: sqlError } = await supabase
      .from("enrollments")
      .select("id")
      .limit(1);
    if (sqlError && sqlError.code !== "PGRST116") {
      console.error(
        "SQL Connection Error during payment create:",
        sqlError.message,
      );
    }
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId, amount, description } = await req.json();
    console.log("Creating payment for:", { courseId, amount, description });

    if (!process.env.PAYOS_CLIENT_ID) {
      console.error("CRITICAL: PAYOS_CLIENT_ID is missing from environment");
      return NextResponse.json(
        { error: "Configuration Error" },
        { status: 500 },
      );
    }

    // 1. Generate orderCode (Required as integer by PayOS)
    const orderCode = Number(String(Date.now()).slice(-9));
    const domain = process.env.NEXTAUTH_URL || "http://localhost:3000";

    // 2. Fetch course details from DB for dynamic pricing
    const { data: courseData } = await supabase
      .from("courses")
      .select("price, price_sale")
      .eq("slug", courseId)
      .single();

    const finalAmount =
      courseData?.price_sale || courseData?.price || amount || 10000;

    // 3. IMPORTANT: Save pending enrollment to DB to track user/course
    const { error: pendingError } = await supabase.from("enrollments").upsert(
      [
        {
          user_email: session.user.email.toLowerCase(),
          course_id: courseId,
          payment_id: String(orderCode), // Store the Order Code as the identifier
          amount: finalAmount,
          status: "pending", // Explicit status
        },
      ],
      { onConflict: "user_email,course_id" },
    );

    if (pendingError) {
      console.error("Failed to save pending enrollment:", pendingError);
      throw new Error("Database error. Please try again.");
    }

    // 4. Prepare PayOS body with dynamic amount
    const body = {
      orderCode: orderCode,
      amount: finalAmount,
      description: "", // Empty description
      items: [
        {
          name: courseId,
          quantity: 1,
          price: finalAmount,
        },
      ],
      returnUrl: `${domain}/blog/${courseId}?status=PAID`,
      cancelUrl: `${domain}/blog/${courseId}?status=CANCELLED`,
    };

    // 4. Verify payos instance has the required nested method
    const payosClient = payos;
    if (
      !payosClient ||
      !payosClient.paymentRequests ||
      typeof payosClient.paymentRequests.create !== "function"
    ) {
      console.error(
        "PayOS API Error: paymentRequests.create is missing. keys:",
        Object.keys(payosClient || {}),
      );
      throw new Error("PayOS not initialized successfully. Check server logs.");
    }

    const paymentLinkResponse = await payosClient.paymentRequests.create(body);

    return NextResponse.json(paymentLinkResponse);
  } catch (error) {
    console.error("PayOS API Error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error?.message || "Unknown error",
        stack:
          process.env.NODE_ENV === "development" ? error?.stack : undefined,
      },
      { status: 500 },
    );
  }
}
