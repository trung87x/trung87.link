import { payos } from "@/utils/payos";
import { auth } from "@/utils/auth";
import { createAdminClient, createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId } = await req.json();
    if (!courseId) {
      return NextResponse.json({ error: "Missing courseId" }, { status: 400 });
    }

    // 1. Find pending enrollment for this user and course
    const supabase = await createClient(); // Use user client to find their own record
    const { data: enrollment, error: findError } = await supabase
      .from("enrollments")
      .select("*")
      .eq("user_email", session.user.email.toLowerCase())
      .eq("course_id", courseId)
      .eq("status", "pending")
      .single();

    if (findError || !enrollment) {
      console.error("No pending enrollment found:", findError);
      return NextResponse.json(
        { error: "No pending payment found" },
        { status: 404 },
      );
    }

    const orderCode = String(enrollment.payment_id);
    if (!orderCode) {
      return NextResponse.json(
        { error: "Invalid payment ID" },
        { status: 400 },
      );
    }

    // 2. Initializing PayOS
    if (!payos) {
      return NextResponse.json(
        { error: "PayOS not initialized" },
        { status: 500 },
      );
    }

    const numericOrderCode = Number(orderCode);
    console.log(
      `Verifying payment for orderCode provided: ${numericOrderCode}`,
    );

    // 3. Check status with PayOS
    // Correct method found via debug: payos.paymentRequests.get(orderCode)
    const paymentInfo = await payos.paymentRequests.get(numericOrderCode);

    if (!paymentInfo) {
      return NextResponse.json(
        { error: "Could not fetch payment info" },
        { status: 502 },
      );
    }

    console.log("PayOS Payment Info:", paymentInfo.status);

    if (paymentInfo.status === "PAID") {
      // 4. Update enrollment to PAID using Admin Client
      const supabaseAdmin = createAdminClient();
      const { error: updateError } = await supabaseAdmin
        .from("enrollments")
        .update({
          status: "paid",
          updated_at: new Date().toISOString(),
        })
        .eq("id", enrollment.id);

      if (updateError) {
        console.error("Failed to update enrollment:", updateError);
        return NextResponse.json(
          { error: "Database update failed" },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true, status: "PAID" });
    } else {
      return NextResponse.json({ success: false, status: paymentInfo.status });
    }
  } catch (error) {
    console.error("Payment Verification Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}
