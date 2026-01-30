import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const {
  handlers,
  auth: nextAuth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin", // Custom sign-in page
  },
  callbacks: {
    authorized({ auth, request: { nextUrl, headers, cookies } }) {
      // 0. Test Mode Bypass
      if (process.env.NODE_ENV !== "production") {
        if (headers.get("x-e2e-bypass") === "true") return true;
        if (cookies.get("x-e2e-bypass")?.value === "true") return true;
      }

      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isPremium =
        nextUrl.pathname.startsWith("/blog/react.school") ||
        nextUrl.pathname.startsWith("/blog/developer.mozilla.org");

      // Protect /admin: must be logged in and be an admin
      if (isOnAdmin) {
        if (!isLoggedIn) return false;
        if (auth.user.role !== "admin") return false;
        return true;
      }

      // Protect sensitive routes: must be logged in
      if (isOnDashboard || isPremium) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      }
      return true;
    },
    async session({ session, token }) {
      // Fetch user role from Supabase to include in the session
      if (session.user) {
        const { ensureUserProfile } = await import("./profile");
        const profile = await ensureUserProfile(session.user);

        if (profile) {
          session.user.role = profile.role;
        } else {
          session.user.role = "user";
        }
      }
      return session;
    },
  },
});

export { handlers, signIn, signOut };

// Safe wrapper for auth to allow Test Bypass
export const auth = async (...args) => {
  // 1. Bypass check - ONLY for Server Components (args.length === 0)
  // This prevents returning an object when Middleware expects a Response
  if (args.length === 0 && process.env.NODE_ENV !== "production") {
    try {
      const { checkAuthBypass } = await import("./test-bypass");
      const session = await checkAuthBypass();
      if (session) return session;
    } catch (error) {
      // Ignore import errors
    }
  }

  // 2. Default NextAuth behavior
  return nextAuth(...args);
};
