const { test, expect } = require("@playwright/test");
const { getSupabaseAdmin } = require("../src/utils/test/supabase");
const fs = require("fs");
const path = require("path");

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

  test("Should ensure all course layouts have matching slugs", async () => {
    const blogDir = path.join(__dirname, "../src/app/(features)/blog");
    if (!fs.existsSync(blogDir)) {
      test.skip("Blog directory not found");
      return;
    }

    const items = fs.readdirSync(blogDir);
    const errors = [];

    items.forEach((item) => {
      const itemPath = path.join(blogDir, item);
      if (!fs.statSync(itemPath).isDirectory()) return;
      if (item.startsWith("[") || item.startsWith("(")) return;

      const layoutPath = path.join(itemPath, "layout.jsx");
      if (fs.existsSync(layoutPath)) {
        const content = fs.readFileSync(layoutPath, "utf8");
        const slugMatch = content.match(/<CourseGuard\s+slug=["']([^"']+)["']/);

        if (slugMatch) {
          const componentSlug = slugMatch[1];
          if (componentSlug !== item) {
            errors.push(
              `Mismatch in folder "${item}": Expected slug "${item}", found "${componentSlug}"`,
            );
          }
        }
      }
    });

    expect(errors, errors.join("\n")).toHaveLength(0);
  });
});
