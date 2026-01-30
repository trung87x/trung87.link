import CourseGuard from "@/components/auth/CourseGuard";

export default function NextJsArchLayout({ children }) {
  return <CourseGuard slug="nextjs-architecture">{children}</CourseGuard>;
}
