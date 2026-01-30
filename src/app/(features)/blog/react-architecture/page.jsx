import Link from "next/link";
import {
  CommandLineIcon,
  BeakerIcon,
  PaintBrushIcon,
  CircleStackIcon,
  Square3Stack3DIcon,
  HandRaisedIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const MODULE_METADATA = {
  "A-foundation": {
    title: "Foundation",
    description:
      "Thiết lập nền móng vững chắc: Tooling, Kiến trúc và Quy chuẩn dự án.",
    icon: BeakerIcon,
    color: "blue",
    features: [
      "Vite & Editor Setup",
      "Feature-based Arch",
      "Path Aliases (@/)",
    ],
  },
  "B-ui-design": {
    title: "UI Design System",
    description:
      "Xây dựng hệ thống UI chuyên nghiệp với Shadcn/ui và Atomic Design.",
    icon: PaintBrushIcon,
    color: "purple",
    features: ["Shadcn/ui Setup", "Atomic Design", "Responsive Shell"],
  },
  "C-data-state": {
    title: "Data & State",
    description:
      "Làm chủ Server State với TanStack Query và Client State với Zustand.",
    icon: CircleStackIcon,
    color: "emerald",
    features: ["TanStack Query", "Axios Layer", "Zustand Stores"],
  },
  "D-enterprise-forms": {
    title: "Enterprise Forms",
    description:
      "Xử lý Forms phức tạp và Validation mạnh mẽ với Hook Form + Zod.",
    icon: CommandLineIcon,
    color: "orange",
    features: ["React Hook Form", "Zod Validation", "Schema Reuse"],
  },
  "E-advanced-patterns": {
    title: "Advanced Patterns",
    description:
      "Biến app thành Enterprise-grade với Auth và Global Error Handling.",
    icon: ShieldCheckIcon,
    color: "indigo",
    features: ["Auth System", "Error Boundaries", "Global Persistence"],
  },
  "F-optimization-devops": {
    title: "DevOps & Optimization",
    description: "Đưa ứng dụng lên Production: Performance, Docker và CI/CD.",
    icon: RocketLaunchIcon,
    color: "rose",
    features: ["Perf Tuning", "Dockerization", "CI/CD Pipeline"],
  },
};

export const metadata = {
  title: "React Architecture | Professional Guide",
  description: "Xây dựng ứng dụng React quy mô lớn với tư duy Senior.",
};

export default function ReactArchitecturePage() {
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        glow: "group-hover:text-[#61dafb]",
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        glow: "group-hover:text-purple-300",
      },
      emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        glow: "group-hover:text-emerald-300",
      },
      orange: {
        text: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        glow: "group-hover:text-orange-300",
      },
      indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        glow: "group-hover:text-indigo-300",
      },
      rose: {
        text: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        glow: "group-hover:text-rose-300",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
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
          <div className="flex items-center gap-3 text-blue-400">
            <SparklesIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-widest uppercase">
              Advanced Curriculum
            </span>
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            React Enterprise <br /> Architecture
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
            Học cách xây dựng và vận hành những ứng dụng React triệu đô. Tư duy
            **Bulletproof**, kiến trúc **Feature-based**, và bộ công cụ mạnh mẽ
            nhất 2026.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              React 19 + Vite
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              TanStack Query
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Zustand
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">
            🎯 Tech Stack Chuyên Nghiệp (2026)
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161b22]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-100">
                    Thành phần
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-100">
                    Công cụ
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-100">
                    Tại sao?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  {
                    component: "Core",
                    tool: "React 19 + Vite",
                    reason: "Tốc độ build siêu nhanh.",
                  },
                  {
                    component: "Style",
                    tool: "Shadcn UI + Tailwind",
                    reason:
                      "Đẹp sẵn, copy-paste code, không phụ thuộc thư viện.",
                  },
                  {
                    component: "Async State",
                    tool: "TanStack Query",
                    reason: "Quản lý cache API đỉnh cao (Goodbye useEffect).",
                  },
                  {
                    component: "Global State",
                    tool: "Zustand",
                    reason: "Nhẹ hơn Redux 100 lần.",
                  },
                  {
                    component: "Forms",
                    tool: "React Hook Form + Zod",
                    reason: "Validation type-safe tuyệt đối.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-4 font-bold text-gray-100">
                      {row.component}
                    </td>
                    <td className="px-6 py-4 text-blue-400">{row.tool}</td>
                    <td className="px-6 py-4 text-gray-400">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bulletproof Architecture Section */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">
            📐 Bulletproof Architecture
          </h2>
          <div className="rounded-2xl border border-white/10 bg-[#161b22] p-8 font-mono text-sm leading-relaxed whitespace-pre">
            <span className="text-blue-400">src/</span>
            {"\n"}
            <span className="text-gray-500">├──</span>{" "}
            <span className="text-emerald-400">features/</span>{" "}
            <span className="text-gray-600">
              (Mỗi tính năng là một module độc lập)
            </span>
            {"\n"}
            <span className="text-gray-500">│ ├── auth/</span>
            {"\n"}
            <span className="text-gray-500">│ ├── tours/</span>
            {"\n"}
            <span className="text-gray-500">│ └── booking/</span>
            {"\n"}
            <span className="text-gray-500">├──</span>{" "}
            <span className="text-emerald-400">components/</span>{" "}
            <span className="text-gray-600">
              (UI dùng chung: Button, Modal)
            </span>
            {"\n"}
            <span className="text-gray-500">├──</span>{" "}
            <span className="text-emerald-400">lib/</span>{" "}
            <span className="text-gray-600">
              (Cấu hình axios, query-client)
            </span>
            {"\n"}
            <span className="text-gray-500">└──</span>{" "}
            <span className="text-emerald-400">hooks/</span>{" "}
            <span className="text-gray-600">(Logic dùng chung)</span>
          </div>
          <p className="mt-4 text-gray-400 italic">
            * Chúng ta sẽ không vứt mọi thứ vào folder `/components`. Chúng ta
            sẽ dùng kiến trúc Feature-based để quản lý dự án quy mô lớn.
          </p>
        </div>

        {/* Lộ trình học tập Section */}
        <h2 className="mb-8 text-3xl font-bold">📚 Lộ Trình Chi Tiết</h2>
        {/* Core Architecture Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(MODULE_METADATA).map(([key, meta]) => {
            const colors = getColorClasses(meta.color);
            const Icon = meta.icon;

            return (
              <Link
                key={key}
                href={`/blog/react-architecture/${key}`}
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

                  <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-blue-400">
                    {meta.title}
                  </h3>
                  <p className="mb-6 text-gray-400">{meta.description}</p>

                  <ul className="mt-auto space-y-3">
                    {meta.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <ArrowRightIcon className="h-3 w-3 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-xs font-bold tracking-widest text-gray-50 uppercase">
                      Module Details
                    </span>
                    <ArrowRightIcon className="h-5 w-5 -translate-x-2 text-gray-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
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
