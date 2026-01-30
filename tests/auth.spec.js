const { test, expect } = require("@playwright/test");
const { getSupabaseAdmin } = require("../src/utils/test/supabase");

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

    test("User should see callbackUrl in signin page when redirected from protected page", async ({
      page,
    }) => {
      // 1. Go to a protected page
      await page.goto("/admin/dashboard");

      // 2. Be redirected to signin with callbackUrl
      await expect(page).toHaveURL(/\/signin\?callbackUrl=/);
      const url = new URL(page.url());
      const callbackUrl = url.searchParams.get("callbackUrl");
      expect(callbackUrl).toContain("/admin/dashboard");
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

    test("Authenticated user with 'user' role should NOT access /admin", async ({
      page,
      context,
    }) => {
      // Set the bypass cookies for a normal user
      await context.addCookies([
        {
          name: "x-e2e-bypass",
          value: "true",
          domain: "localhost",
          path: "/",
        },
        {
          name: "x-e2e-role",
          value: "user",
          domain: "localhost",
          path: "/",
        },
      ]);

      await page.goto("/admin/dashboard");
      // Right now this will FAIL to block, proving the vulnerability.
      // After fix, this should expect a redirect to / or /signin
      await expect(page).not.toHaveURL(/\/admin/);
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

    test("Logout in one tab should affect other tabs (Server-side check)", async ({
      browser,
    }) => {
      // 1. Create one context with two pages (tabs)
      const context = await browser.newContext();
      const page1 = await context.newPage();
      const page2 = await context.newPage();

      // 2. Login (using bypass cookie)
      await context.addCookies([
        {
          name: "x-e2e-bypass",
          value: "true",
          domain: "localhost",
          path: "/",
        },
      ]);

      // 3. Both tabs access /admin/dashboard
      await page1.goto("/admin/dashboard");
      await page2.goto("/admin/dashboard");

      await expect(page1).toHaveURL(/\/admin\/dashboard/);
      await expect(page2).toHaveURL(/\/admin\/dashboard/);

      // 4. Simulate Tab 1 signing out (which clears the cookie for the WHOLE context)
      // Instead of clicking "Sign Out" which might be tricky with bypass,
      // we manually clear the cookies from the context, exactly like signOut does.
      await context.clearCookies();

      // 5. Tab 1: If it navigates now, it should be kicked out
      await page1.goto("/admin/dashboard");
      await expect(page1).toHaveURL(/\/signin/);

      // 6. Tab 2: If we refresh or navigate, it should also be logged out
      await page2.reload();
      await expect(page2).toHaveURL(/\/signin/);

      await context.close();
    });
  });
});
