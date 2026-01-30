import { auth } from "@/utils/auth";
import { isStudent } from "@/utils/supabase/server";
import AccessDenied from "@/components/auth/AccessDenied";

export default async function MDNLayout({ children }) {
  const session = await auth();

  // If you want MDN to also require login, you should add it to middleware.js first.
  // Then this layout will handle the specific student authorization.
  if (
    session &&
    !(await isStudent(session?.user?.email, "developer.mozilla.org"))
  ) {
    const { createClient } = await import("@/utils/supabase/server");
    const supabase = await createClient();
    const { data: courseData } = await supabase
      .from("courses")
      .select("title, price, price_sale")
      .eq("slug", "developer.mozilla.org")
      .single();

    return (
      <AccessDenied
        userEmail={session?.user?.email}
        courseId="developer.mozilla.org"
        courseData={courseData}
      />
    );
  }

  return <>{children}</>;
}
