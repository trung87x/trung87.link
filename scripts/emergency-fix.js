import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixOrder(orderCode) {
  console.log(`Force updating order ${orderCode} to PAID...`);
  const { error } = await supabase
    .from("enrollments")
    .update({ status: "paid" })
    .eq("payment_id", String(orderCode));

  if (error) console.error("Error:", error);
  else console.log("Update success.");
}

fixOrder(743492121);
