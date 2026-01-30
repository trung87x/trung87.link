const { test, expect } = require("@playwright/test");
const { getSupabaseAdmin } = require("../src/utils/test/supabase");

const supabase = getSupabaseAdmin();

test.describe("Database Infrastructure", () => {
  test("Should be able to write to 'profiles' table (DB Connection Check)", async () => {
    // Skip if credentials are missing
    if (!supabase) {
      test.skip("Skipping DB test because Supabase credentials are missing");
      return;
    }

    const testUser = {
      email: `test_db_check_${Date.now()}@example.com`,
      name: "Test DB User",
      image: "https://example.com/avatar.jpg",
    };

    console.log("Attempting to insert profile for:", testUser.email);

    // 1. Cleanup
    await supabase.from("profiles").delete().eq("email", testUser.email);

    // 2. Insert
    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          email: testUser.email,
          full_name: testUser.name,
          role: "user",
        },
      ])
      .select()
      .single();

    // 3. Verify
    expect(error).toBeNull();
    expect(data).toBeTruthy();
    expect(data.email).toBe(testUser.email);
    expect(data.role).toBe("user");

    console.log("Profile created successfully in DB:", data.id);

    // 4. Cleanup
    await supabase.from("profiles").delete().eq("id", data.id);
  });
});
