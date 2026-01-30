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
} from "@heroicons/react/24/outline";

const MODULE_METADATA = {
  "A-app-router": {
    title: "App Router Mental Model",
    description: "Quên thẻ <div> đi. Hãy nghĩ về Server và Client Components.",
    icon: CpuChipIcon,
    color: "blue",
    features: [
      "React Server Components",
      "File-based Routing",
      "Partial Prerendering",
    ],
  },
  "B-database-prisma": {
    title: "Database & Prisma",
    description: "Xây dựng Backend Layer mạnh mẽ với PostgreSQL và Prisma ORM.",
    icon: CircleStackIcon,
    color: "emerald",
    features: ["Postgres & Docker", "Prisma Schema Design", "Type-safe CRUD"],
  },
  "C-server-actions": {
    title: "Server Actions (RPC)",
    description:
      "Giết chết API truyền thống. Kết nối trực tiếp Form và Database.",
    icon: BoltIcon,
    color: "orange",
    features: [
      "use server directive",
      "Validation (Zod)",
      "Revalidation (Cache)",
    ],
  },
  "D-auth-security": {
    title: "Enterprise Security",
    description:
      "Bảo mật hệ thống với Auth.js v5 và Role-based Access Control.",
    icon: ShieldCheckIcon,
    color: "indigo",
    features: ["Auth.js v5", "Middleware Protection", "RBAC Strategy"],
  },
  "E-advanced-ui": {
    title: "High Performance UI",
    description: "Trải nghiệm người dùng 60FPS với Streaming và Suspense.",
    icon: SparklesIcon,
    color: "purple",
    features: [
      "Streaming & Suspense",
      "Optimistic Updates",
      "Smooth Transitions",
    ],
  },
  "F-deployment": {
    title: "Deployment & Scaling",
    description: "Đưa ứng dụng lên Production với Vercel và Edge Runtime.",
    icon: GlobeAltIcon,
    color: "rose",
    features: ["Vercel Deployment", "Edge Functions", "SEO & Metadata"],
  },
};

export const metadata = {
  title: "Next.js Fullstack Architecture | The Modern Monolith",
  description:
    "Xây dựng ứng dụng Fullstack hiện đại với Next.js 15 App Router.",
};

export default function NextJsArchitecturePage() {
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
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
      orange: {
        text: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
      },
      indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
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
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[120px]" />
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
          <div className="flex items-center gap-3 text-emerald-400">
            <SparklesIcon className="h-6 w-6" />
            <span className="text-sm font-bold tracking-widest uppercase">
              Fullstack Mastery
            </span>
          </div>
          <h1 className="mt-6 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Next.js 15 Enterprise <br /> Architecture
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400">
            Hợp nhất sức mạnh của Backend và Frontend vào một framework duy
            nhất. Làm chủ **App Router**, **Server Actions**, và tư duy **Modern
            Monolith**.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Next.js 15 (LTS)
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Auth.js v5
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Prisma + Postgres
            </div>
          </div>
        </div>

        {/* Tech Transition Section */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">🚀 Tech Stack "Hợp Thể"</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#161b22]">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-100">
                    Thành phần
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-100 italic">
                    Cũ (ASP.NET/Vue)
                  </th>
                  <th className="px-6 py-4 font-semibold text-blue-400">
                    Hiện đại (Next.js 15)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  {
                    component: "Framework",
                    old: "ASP.NET Core + Vue 3",
                    new: "Next.js 15 (App Router)",
                  },
                  {
                    component: "Render",
                    old: "Client Side Rendering",
                    new: "Server Components (RSC)",
                  },
                  {
                    component: "API",
                    old: "REST API Controllers",
                    new: "Server Actions (RPC)",
                  },
                  {
                    component: "Database",
                    old: "SQL Server + EF Core",
                    new: "PostgreSQL + Prisma",
                  },
                  {
                    component: "Auth",
                    old: "Identity + JWT",
                    new: "Auth.js v5 (NextAuth)",
                  },
                ].map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-4 font-bold text-gray-100">
                      {row.component}
                    </td>
                    <td className="px-6 py-4 text-gray-500 italic">
                      {row.old}
                    </td>
                    <td className="px-6 py-4 font-medium text-blue-400">
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
                href={`/blog/nextjs-architecture/${key}`}
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

                  <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-emerald-400">
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
                        <ArrowRightIcon className="h-3 w-3 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Explore Module
                    </span>
                    <ArrowRightIcon className="h-5 w-5 -translate-x-2 text-emerald-500 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
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
