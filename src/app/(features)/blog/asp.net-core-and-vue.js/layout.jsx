import CourseGuard from "@/components/auth/CourseGuard";

export default function AspNetVueLayout({ children }) {
  return <CourseGuard slug="asp.net-core-and-vue.js">{children}</CourseGuard>;
}
