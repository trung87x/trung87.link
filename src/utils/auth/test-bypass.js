import { headers, cookies } from "next/headers";

export async function checkAuthBypass() {
  try {
    const h = await headers();
    const c = await cookies();

    // Check Header OR Cookie
    const bypassHeader = h.get("x-e2e-bypass");
    const bypassCookie = c.get("x-e2e-bypass");
    const roleHeader = h.get("x-e2e-role");
    const roleCookie = c.get("x-e2e-role");

    if (bypassHeader === "true" || bypassCookie?.value === "true") {
      const role = roleHeader || roleCookie?.value || "admin";
      console.error(
        ` [Auth] Bypassing auth for E2E test (via Header/Cookie) - Role: ${role}`,
      );
      return {
        user: {
          name: role === "admin" ? "Test Admin" : "Test User",
          email: role === "admin" ? "admin@test.com" : "user@test.com",
          role: role,
          image: `https://ui-avatars.com/api/?name=Test+${role}`,
        },
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      };
    }
  } catch (error) {
    // console.error("Error in checkAuthBypass:", error);
  }
  return null;
}
