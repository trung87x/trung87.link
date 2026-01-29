import { auth } from "@/utils/auth";
import { isStudent } from "@/utils/supabase/server";
import AccessDenied from "@/components/auth/AccessDenied";

export default async function ReactSchoolLayout({ children }) {
  const session = await auth();

  // Middleware already ensures session exists for /blog/react.school,
  // but we check isStudent here to show a custom Access Denied UI.
  if (!(await isStudent(session?.user?.email, "react.school"))) {
    return (
      <AccessDenied userEmail={session?.user?.email} courseId="react.school" />
    );
  }

  return <>{children}</>;
}
