const { test, expect } = require("@playwright/test");
const { getSupabaseAdmin } = require("./utils/supabase");

const supabase = getSupabaseAdmin();

test.describe("Authentication Feature", () => {
  // --- PART 1: UI & Flow Tests ---
  test.describe("Frontend & Redirects", () => {
    test("Unauthenticated user accessing /admin should be redirected to /signin", async ({
      page,
    }) => {
      await page.goto("/admin");
      await expect(page).toHaveURL(/\/signin/);
      await expect(page.getByText("Chào mừng trở lại")).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Tiếp tục với Google" }),
      ).toBeVisible();
    });

    test("Authenticated user (bypass) can access /admin", async ({
      page,
      context,
    }) => {
      // Set the bypass cookie
      await context.addCookies([
        {
          name: "x-e2e-bypass",
          value: "true",
          domain: "localhost",
          path: "/",
        },
      ]);

      await page.goto("/admin");
      // Should NOT be redirected to /signin
      await expect(page).toHaveURL(/\/admin/);
    });

    test("Signin page has correct elements", async ({ page }) => {
      await page.goto("/signin");
      await expect(
        page.getByRole("heading", { name: "Chào mừng trở lại" }),
      ).toBeVisible();
      await expect(page.getByText("React School")).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Tiếp tục với Google" }),
      ).toBeVisible();
    });
  });

  // --- PART 2: Backend & Database Tests ---
  test.describe("Backend & Database Connectivity", () => {
    test("Should be able to write to 'profiles' table (DB Connection Check)", async () => {
      // Skip if credentials are missing
      if (!supabase) {
        test.skip("Skipping DB test because Supabase credentials are missing");
        return;
      }

      const testUser = {
        email: `test_merged_${Date.now()}@example.com`,
        name: "Test Merged User",
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
});
