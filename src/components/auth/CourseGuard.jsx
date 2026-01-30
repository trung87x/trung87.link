import { auth } from "@/utils/auth";
import { isStudent } from "@/utils/supabase/server";
import AccessDenied from "@/components/auth/AccessDenied";

export default async function CourseGuard({ children, slug }) {
  const session = await auth();

  if (!(await isStudent(session?.user?.email, slug))) {
    const { createClient } = await import("@/utils/supabase/server");
    const supabase = await createClient();
    const { data: courseData } = await supabase
      .from("courses")
      .select("title, price, price_sale")
      .eq("slug", slug)
      .single();

    return (
      <AccessDenied
        userEmail={session?.user?.email}
        courseId={slug}
        courseData={courseData}
      />
    );
  }

  return <>{children}</>;
}
