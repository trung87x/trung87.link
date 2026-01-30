// import { createAdminClient } from "./src/utils/supabase/server.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

// Mocking createAdminClient since it uses next/headers inside normally,
// wait, the util uses createClient from supabase-js, so it might work if we just import what we need.
// But the server util exports 'cookies' which fails in node script.
// I will just use direct supabase-js here.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing ENV variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function clearDB() {
  console.log("Clearing enrollments table...");
  const { error } = await supabase
    .from("enrollments")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000"); // Delete all

  if (error) {
    console.error("Error clearing DB:", error);
  } else {
    console.log("Database cleared successfully.");
  }
}

clearDB();
