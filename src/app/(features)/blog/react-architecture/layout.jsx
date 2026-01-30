import CourseGuard from "@/components/auth/CourseGuard";

export default function ReactArchLayout({ children }) {
  return <CourseGuard slug="react-architecture">{children}</CourseGuard>;
}
