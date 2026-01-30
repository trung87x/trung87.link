import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";
import { payos } from "../../src/utils/payos/index.js";

// Setup Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

const TEST_EMAIL = "auto_test@example.com";
const TEST_COURSE = "test-course-101";

async function runTest() {
  console.log("=== STARTING PAYMENT LOGIC TEST ===");

  // 1. Cleanup
  console.log("1. Cleaning up old data...");
  await supabase
    .from("enrollments")
    .delete()
    .eq("user_email", TEST_EMAIL)
    .eq("course_id", TEST_COURSE);

  // 2. Simulate CREATE Payment
  console.log("2. Testing CREATE logic...");
  const orderCode = Number(String(Date.now()).slice(-9));
  const finalAmount = 10000;

  // Insert Pending Record manually (simulating what /api/payment/create does)
  const { error: createError } = await supabase.from("enrollments").upsert([
    {
      user_email: TEST_EMAIL,
      course_id: TEST_COURSE,
      payment_id: String(orderCode),
      amount: finalAmount,
      status: "pending",
    },
  ]);

  if (createError) throw new Error("Create failed: " + createError.message);

  // Verify it exists in DB
  const { data: record } = await supabase
    .from("enrollments")
    .select("*")
    .eq("payment_id", String(orderCode))
    .single();
  if (!record || record.status !== "pending") {
    throw new Error("DB Check Failed: Record not pending or missing.");
  }
  console.log(
    "   ✅ Pending record saved successfully. ID:",
    record.payment_id,
  );

  // 3. Testing VERIFY logic
  console.log("3. Testing VERIFY logic...");

  // Since we can't pay real money, we will MOCK the PayOS check.
  // We want to test that IF PayOS says PAID, we update DB.

  const mockPayOSResponse = {
    status: "PAID",
    amount: 10000,
    id: "mock_trans_id",
  };

  console.log("   Mocking PayOS response: PAID");

  if (mockPayOSResponse.status === "PAID") {
    const { error: updateError } = await supabase
      .from("enrollments")
      .update({
        status: "paid",
        updated_at: new Date().toISOString(),
      })
      .eq("id", record.id);

    if (updateError) throw new Error("Update failed: " + updateError.message);
  }

  // 4. Final verification
  const { data: finalRecord } = await supabase
    .from("enrollments")
    .select("*")
    .eq("id", record.id)
    .single();
  if (finalRecord.status === "paid") {
    console.log("   ✅ DB updated to PAID successfully.");
  } else {
    throw new Error("Final DB check failed. Status: " + finalRecord.status);
  }

  // Cleanup
  await supabase.from("enrollments").delete().eq("id", record.id);
  console.log("=== TEST PASSED ===");
}

runTest().catch(console.error);
