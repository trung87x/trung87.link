import { auth } from "@/lib/auth";
import { isStudent } from "@/lib/students";
import AccessDenied from "@/components/auth/AccessDenied";

export default async function MDNLayout({ children }) {
  const session = await auth();

  // If you want MDN to also require login, you should add it to middleware.js first.
  // Then this layout will handle the specific student authorization.
  if (
    session &&
    !(await isStudent(session?.user?.email, "developer.mozilla.org"))
  ) {
    return (
      <AccessDenied
        userEmail={session?.user?.email}
        courseId="developer.mozilla.org"
      />
    );
  }

  return <>{children}</>;
}
