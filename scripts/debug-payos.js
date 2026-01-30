import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function run() {
  const { payos } = await import("../src/utils/payos/index.js");

  if (!payos) {
    return;
  }

  const orderCode = 743492121;
  console.log(`Calling payos.paymentRequests.get(${orderCode})...`);
  try {
    const info = await payos.paymentRequests.get(orderCode);
    console.log("Success! Status:", info.status);
    console.log("Details:", JSON.stringify(info, null, 2));
  } catch (e) {
    console.error("Failed:", e.message);
  }
}
run();
