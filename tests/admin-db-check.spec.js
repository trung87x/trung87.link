const { test, expect } = require("@playwright/test");
const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: ".env.local" });
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

test.describe("Admin Database Permission Check", () => {
  test("Service Role Key should have permissions to write to courses table", async () => {
    console.log("Checking DB Connection...");
    console.log("Supabase URL:", supabaseUrl ? "FOUND" : "MISSING");
    console.log(
      "Service Role Key:",
      serviceRoleKey ? "FOUND" : "MISSING (Critical)",
    );

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error(
        "Missing Supabase credentials. Cannot test Admin writes.",
      );
    }

    // Create Admin Client
    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const timestamp = Date.now();
    const testCourse = {
      title: `DB Check Course ${timestamp}`,
      slug: `db-check-${timestamp}`,
      description: "Direct DB Write Test",
      price: 1000,
      is_active: false,
    };

    console.log("Attempting to insert course:", testCourse.slug);

    // 1. Insert
    const { data, error } = await supabase
      .from("courses")
      .insert([testCourse])
      .select()
      .single();

    if (error) {
      console.error("Insert Error:", JSON.stringify(error, null, 2));
    }

    expect(error).toBeNull();
    expect(data).toBeTruthy();
    expect(data.slug).toBe(testCourse.slug);

    console.log("Insert Success:", data.id);

    // 2. Cleanup
    const { error: deleteError } = await supabase
      .from("courses")
      .delete()
      .eq("id", data.id);

    expect(deleteError).toBeNull();
    console.log("Cleanup Success");
  });
});
