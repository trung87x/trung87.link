import CourseGuard from "@/components/auth/CourseGuard";

export default function MDNLayout({ children }) {
  return <CourseGuard slug="developer.mozilla.org">{children}</CourseGuard>;
}
