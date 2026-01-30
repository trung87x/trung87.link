import { headers, cookies } from "next/headers";

export async function checkAuthBypass() {
  try {
    const h = await headers();
    const c = await cookies();

    // Check Header OR Cookie
    const bypassHeader = h.get("x-e2e-bypass");
    const bypassCookie = c.get("x-e2e-bypass");

    if (bypassHeader === "true" || bypassCookie?.value === "true") {
      console.error(" [Auth] Bypassing auth for E2E test (via Header/Cookie)");
      console.error(" [Auth] Bypassing auth for E2E test");
      return {
        user: {
          name: "Test Admin",
          email: "admin@test.com",
          role: "admin",
          image: "https://ui-avatars.com/api/?name=Test+Admin",
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };
    }
  } catch (error) {
    // console.error("Error in checkAuthBypass:", error);
  }
  return null;
}
