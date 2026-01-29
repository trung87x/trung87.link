import payos from "@/lib/payos";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
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

    // In a real app, you should validate the amount based on the courseId from a DB
    const orderCode = Number(String(Date.now()).slice(-9));
    const domain = process.env.NEXTAUTH_URL || "http://localhost:3000";

    const body = {
      orderCode: orderCode,
      amount: amount || 500000, // Default price 500k
      description: description || `Mua ${courseId}`,
      items: [
        {
          name: courseId,
          quantity: 1,
          price: amount || 500000,
        },
      ],
      returnUrl: `${domain}/blog/${courseId}`,
      cancelUrl: `${domain}/blog/${courseId}`,
    };

    const paymentLinkResponse = await payos.createPaymentLink(body);

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
