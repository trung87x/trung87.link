import { auth } from "@/utils/auth";
import { isStudent } from "@/utils/supabase/server";
import AccessDenied from "@/components/auth/AccessDenied";

export default async function ReactSchoolLayout({ children }) {
  const session = await auth();

  // Middleware already ensures session exists for /blog/react.school,
  // but we check isStudent here to show a custom Access Denied UI.
  if (!(await isStudent(session?.user?.email, "react.school"))) {
    const { createClient } = await import("@/utils/supabase/server");
    const supabase = await createClient();
    const { data: courseData } = await supabase
      .from("courses")
      .select("title, price, price_sale")
      .eq("slug", "react.school")
      .single();

    return (
      <AccessDenied
        userEmail={session?.user?.email}
        courseId="react.school"
        courseData={courseData}
      />
    );
  }

  return <>{children}</>;
}
