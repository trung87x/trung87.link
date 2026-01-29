import { payos } from "@/utils/payos";
import { auth } from "@/utils/auth";
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

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

    // 2. IMPORTANT: Save pending enrollment to DB to track user/course
    // This allows us to use a short description for PayOS while keeping all data
    const { error: pendingError } = await supabase.from("enrollments").upsert(
      [
        {
          user_email: session.user.email.toLowerCase(),
          course_id: courseId,
          payment_id: `PENDING_${orderCode}`,
          amount: amount || 500000,
        },
      ],
      { onConflict: "user_email,course_id" },
    );

    if (pendingError) {
      console.error("Failed to save pending enrollment:", pendingError);
      throw new Error("Database error. Please try again.");
    }

    // 3. Prepare PayOS body with SHORT description (< 25 chars)
    const body = {
      orderCode: orderCode,
      amount: amount || 500000,
      description: "", // Empty description
      items: [
        {
          name: courseId,
          quantity: 1,
          price: amount || 500000,
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
