import { createAdminClient } from "@/utils/supabase/server";
import payos from "@/utils/payos";
import { NextResponse } from "next/server";

/**
 * @openapi
 * /api/webhook/payos:
 *   post:
 *     summary: Nhận Webhook từ PayOS
 *     description: API này dùng để nhận thông báo thanh toán thành công từ PayOS và kích hoạt khóa học cho người dùng.
 *     tags:
 *       - Webhook
 *     responses:
 *       200:
 *         description: Phản hồi thành công cho PayOS
 *       400:
 *         description: Xác thực Webhook thất bại
 */
export async function POST(req) {
  const supabaseService = createAdminClient();
  try {
    const body = await req.json();

    const webhookData = payos.webhooks.verify(body);
    console.log("Webhook Verified Data:", webhookData);

    // Only process if payment is successful
    if (body.code === "00" || webhookData.status === "PAID") {
      let email = null;
      let courseId = null;

      // Plan A: Look up pending enrollment by orderCode (Modern way)
      console.log(
        `Searching for pending enrollment with orderCode: ${webhookData.orderCode}`,
      );
      const { data: pendingData, error: lookupError } = await supabaseService
        .from("enrollments")
        .select("user_email, course_id")
        .eq("payment_id", `PENDING_${webhookData.orderCode}`)
        .single();

      if (pendingData) {
        email = pendingData.user_email;
        courseId = pendingData.course_id;
        console.log(`Found pending record: ${email} for ${courseId}`);
      } else {
        // Plan B: Parse from description (Legacy fallback)
        if (
          webhookData.description &&
          webhookData.description.includes("Mua ")
        ) {
          const content = webhookData.description.replace("Mua ", "").trim();
          const parts = content.split(" ");
          courseId = parts[0];
          email = parts[1];
        }
      }

      if (email && courseId) {
        console.log(`Finalizing enrollment: ${email} -> ${courseId}`);
        const { error } = await supabaseService.from("enrollments").upsert(
          [
            {
              user_email: email.toLowerCase(),
              course_id: courseId,
              payment_id: webhookData.paymentLinkId, // Update to real link ID
              amount: webhookData.amount,
            },
          ],
          { onConflict: "user_email,course_id" },
        );

        if (error) {
          console.error("Supabase Enrollment Error:", error);
          return NextResponse.json({ error: "DB Error" }, { status: 500 });
        }
        console.log("Enrollment successful!");
      } else {
        console.warn("Could not determine user/course from webhook data.");
      }
    } else {
      console.log(
        "Webhook received but status is not PAID:",
        webhookData.status,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      { error: "Webhook verification failed" },
      { status: 400 },
    );
  }
}
