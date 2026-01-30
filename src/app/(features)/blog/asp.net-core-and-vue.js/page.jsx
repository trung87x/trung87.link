import Link from "next/link";
import {
  CommandLineIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  GlobeAltIcon,
  CodeBracketSquareIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const MODULE_METADATA = {
  "A-getting-started": {
    title: "Getting Started",
    description:
      "Thiết lập môi trường dev chuyên nghiệp và khởi tạo cấu trúc dự án Travel Tour.",
    icon: CodeBracketSquareIcon,
    color: "blue",
    features: [
      "Tầm nhìn dự án",
      "Cài đặt công cụ",
      "Cấu trúc Clean Architecture",
    ],
  },
  "B-backend-architecture": {
    title: "Backend Architecture",
    description:
      "Làm chủ tư duy Senior với Clean Architecture: Domain, Application và Infrastructure.",
    icon: ServerIcon,
    color: "indigo",
    features: ["Domain Layer", "Application Layer", "Infrastructure Layer"],
  },
  "C-advanced-backend": {
    title: "Advanced Backend",
    description:
      "Xử lý các vấn đề phức tạp với CQRS, MediatR và Validation Pipelines.",
    icon: BoltIcon,
    color: "purple",
    features: [
      "CQRS với MediatR",
      "Commands & Queries",
      "Validation Pipelines",
    ],
  },
  "D-enterprise-essentials": {
    title: "Enterprise Essentials",
    description:
      "Hoàn thiện Backend với Authentication (JWT), Global Error Handling và Redis Caching.",
    icon: ShieldCheckIcon,
    color: "emerald",
    features: [
      "Authentication (JWT)",
      "Global Error Handling",
      "Redis Caching",
    ],
  },
  "E-frontend-foundation": {
    title: "Frontend Foundation (Vue 3)",
    description:
      "Xây dựng giao diện Reactive mượt mà với Vue 3 Composition API và Pinia.",
    icon: CpuChipIcon,
    color: "green",
    features: [
      "Vue 3 & Vite",
      "Pinia (State Management)",
      "Thiết kế Component",
    ],
  },
  "F-integration-deployment": {
    title: "Integration & DevOps",
    description:
      "Kết nối API và triển khai sản phẩm chuyên nghiệp với Azure và GitHub Actions.",
    icon: GlobeAltIcon,
    color: "rose",
    features: ["Axios & CORS", "CI/CD GitHub Actions", "Deploy Azure Cloud"],
  },
};

export const metadata = {
  title: "Full Stack Enterprise: ASP.NET Core & Vue.js 3",
  description:
    "Xây dựng ứng dụng Travel Tour chuẩn Enterprise sử dụng .NET 8 và Vue 3.",
};

export default function AspNetVuePage() {
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
      },
      indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
      },
      emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
      },
      rose: {
        text: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-purple-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Navigation */}
        <Link
          href="/blog"
          className="group mb-12 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Courses
        </Link>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-purple-400">
            <SparklesIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-widest uppercase">
              Enterprise Engineering
            </span>
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            ASP.NET Core & <br /> Vue.js 3
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
            Xây dựng hệ thống Travel Tour chuẩn Enterprise. Làm chủ **Clean
            Architecture**, **CQRS**, và **Composition API**. Không chỉ là code,
            đây là Engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              .NET 8/9 (LTS)
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Vue 3 + Pinia
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Clean Architecture
            </div>
          </div>
        </div>

        {/* Tech Transition Section */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">
            🚀 Công Nghệ "Bleeding Edge"
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161b22]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-100">
                    Thành phần
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-500 italic">
                    Cũ (Legacy)
                  </th>
                  <th className="px-6 py-4 font-semibold text-purple-400">
                    Hiện đại (2026)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  {
                    component: "Backend",
                    old: ".NET 5 (Deprecated)",
                    new: ".NET 8/9 (LTS)",
                  },
                  {
                    component: "Frontend",
                    old: "Vue 2 / Options API",
                    new: "Vue 3 Composition API",
                  },
                  {
                    component: "State",
                    old: "Vuex (Deprecated)",
                    new: "Pinia (Type-safe)",
                  },
                  {
                    component: "Architecture",
                    old: "N-Tier / Monolith",
                    new: "Clean Architecture + CQRS",
                  },
                  {
                    component: "Testing",
                    old: "Manual Testing",
                    new: "xUnit + Integration Tests",
                  },
                ].map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-4 font-bold text-gray-100">
                      {row.component}
                    </td>
                    <td className="px-6 py-4 text-gray-500 italic">
                      {row.old}
                    </td>
                    <td className="px-6 py-4 font-medium text-purple-400">
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lộ trình học tập Section */}
        <h2 className="mb-8 text-3xl font-bold">📚 Lộ Trình Chi Tiết</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(MODULE_METADATA).map(([key, meta]) => {
            const colors = getColorClasses(meta.color);
            const Icon = meta.icon;

            return (
              <Link
                key={key}
                href={`/blog/asp.net-core-and-vue.js/${key}`}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 ${colors.bg}`}
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#161b22] p-8 transition-transform duration-300 hover:-translate-y-2">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} border ${colors.border}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-purple-400">
                    {meta.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {meta.description}
                  </p>

                  <ul className="mt-auto space-y-3">
                    {meta.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <ArrowRightIcon className="h-3 w-3 text-purple-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Module Details
                    </span>
                    <ArrowRightIcon className="h-5 w-5 -translate-x-2 text-purple-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
