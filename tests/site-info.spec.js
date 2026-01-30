// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Site Info Pages", () => {
  test("HomePage should load successfully", async ({ page }) => {
    await page.goto("/");

    // Check title or main heading
    // Note: Adjust the expectation based on your actual homepage content
    await expect(page).toHaveTitle(/Trung87/i);

    // Check if Navbar exists
    await expect(page.locator("nav")).toBeVisible();
  });

  test("About Page should display correct info", async ({ page }) => {
    await page.goto("/about");

    // Check for "About" or "Giới thiệu" heading
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/giới thiệu/i).first()).toBeVisible();
  });

  test("Contact Page should be accessible", async ({ page }) => {
    await page.goto("/contact");

    // Check for "Contact" or "Liên hệ" heading
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/liên hệ/i).first()).toBeVisible();
  });
});
