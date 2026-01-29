import payos from "@/lib/payos";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// We use service role to bypass RLS for webhook insertions
const supabaseService = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(req) {
  try {
    const body = await req.json();

    // 1. Verify webhook signature (PayOS best practice)
    // Note: In a real PayOS setup, you'd use payos.verifyPaymentWebhookData(body)
    // But for now we'll process the data we trust from PayOS
    const webhookData = payos.verifyPaymentWebhookData(body);

    if (webhookData.description && webhookData.description.includes("Mua ")) {
      // Format: "Mua [courseId] [email]"
      const content = webhookData.description.replace("Mua ", "").trim();
      const parts = content.split(" ");

      const courseId = parts[0];
      const email = parts[1];

      if (email && courseId) {
        const { error } = await supabaseService.from("enrollments").insert([
          {
            user_email: email.toLowerCase(),
            course_id: courseId,
            payment_id: webhookData.paymentLinkId,
            amount: webhookData.amount,
          },
        ]);

        if (error) {
          console.error("Supabase Insert Error:", error);
          return NextResponse.json({ error: "DB Error" }, { status: 500 });
        }
      }
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
