import CourseGuard from "@/components/auth/CourseGuard";

export default function ReactSchoolLayout({ children }) {
  return <CourseGuard slug="react.school">{children}</CourseGuard>;
}
