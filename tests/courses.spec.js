const { test, expect } = require("@playwright/test");
const { getSupabaseAdmin } = require("../src/utils/test/supabase");

test.describe("Courses Feature", () => {
  test("Should verify Admin (ServiceRole) can create and delete courses", async () => {
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      test.skip("Skipping DB test because Supabase credentials are missing");
      return;
    }
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
