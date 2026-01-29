import Link from "next/link";
import { getRepoContent } from "@/utils/github";
import {
  CommandLineIcon,
  BeakerIcon,
  PaintBrushIcon,
  CheckCircleIcon, // Using CheckCircle for "trophy" or success like items if needed, or specific icons
  MapIcon,
  Square3Stack3DIcon,
  swatchIcon,
  CubeTransparentIcon,
  TrophyIcon, // Need to check if TrophyIcon exists in Outline, if not use Star
  SparklesIcon,
  ArrowRightIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

// Metadata for the modules to match the Premium HTML design
const MODULE_METADATA = {
  "A-intro-to-react": {
    title: "Intro to React",
    description:
      "Khởi đầu vững chắc với nền tảng cốt lõi: JSX, Props, State và tư duy Declarative.",
    icon: BeakerIcon,
    color: "blue", // text-blue-400
    features: ["Setup với Vite", "Components & Props", "useState Hook"],
  },
  "B-user-interface": {
    title: "User Interface",
    description:
      "Nghệ thuật xây dựng giao diện: Styling, Forms, và quản lý sự kiện người dùng.",
    icon: PaintBrushIcon,
    color: "purple", // text-purple-400
    features: ["CSS Modules / Tailwind", "React Hook Form", "Event Handling"],
  },
  "C-todo-list": {
    title: "Todo App",
    subtitle: "PROJECT 01",
    description:
      "Ứng dụng thực tế đầu tiên. Áp dụng toàn bộ kiến thức cơ bản vào CRUD App.",
    icon: CheckCircleIcon,
    color: "emerald", // text-emerald-400
    features: ["CRUD Operations", "LocalStorage", "Component Splitting"],
    highlight: true, // Special border
  },
  "D-react-router": {
    title: "React Router",
    description:
      "Xây dựng Single Page Application (SPA) với hệ thống routing mạnh mẽ.",
    icon: MapIcon,
    color: "orange", // text-orange-400
    features: ["React Router v6", "Nested Routes", "Dynamic Params"],
  },
  "E-redux-toolkit": {
    title: "Redux Toolkit",
    description:
      "Quản lý Global State hiệu quả cho ứng dụng quy mô lớn với RTK.",
    icon: Square3Stack3DIcon,
    color: "indigo", // text-indigo-400
    features: ["Store Setup", "Slices & Thunks", "RTK Query"],
  },
  "F-material-ui": {
    title: "Material UI",
    description:
      "Tiếp cận UI Library phổ biến nhất thế giới. Xây dựng giao diện chuẩn Enterprise.",
    icon: CubeTransparentIcon,
    color: "sky", // text-sky-400
    features: ["MUI Components", "Theming System", "Responsive Grid"],
  },
  "G-project-dashboard": {
    title: "Admin Dashboard",
    subtitle: "CAPSTONE PROJECT",
    description:
      "Đồ án tốt nghiệp: Tổng hợp toàn bộ kiến thức để xây dựng một hệ thống Dashboard chuyên nghiệp.",
    icon: TrophyIcon, // Or StarIcon if Trophy invalid
    color: "yellow", // text-yellow-400
    features: ["Dark Mode", "Charts", "Auth Flow", "Performance"], // These are tags in the design
    isCapstone: true,
  },
};

export const metadata = {
  title: "React School Roadmap | Zero to Hero",
  description: "Lộ trình học React bài bản từ con số 0 đến chuyên nghiệp.",
};

export default async function ReactSchoolPage() {
  // Fetch actual folders to ensure links are valid
  const rootContent = await getRepoContent("react.school");

  // Filter for directory items
  const folders =
    rootContent && Array.isArray(rootContent)
      ? rootContent.filter((item) => item.type === "dir" && !item.isSinglePost)
      : [];

  // Helper to get color classes ensuring we don't break Tailwind tree-shaking (safelist might be needed if dynamic, but we can return full classes)
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
        glow: "group-hover:text-purple-400",
      },
      emerald: {
        text: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        glow: "group-hover:text-emerald-400",
      },
      orange: {
        text: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        glow: "group-hover:text-orange-400",
      },
      indigo: {
        text: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        glow: "group-hover:text-indigo-400",
      },
      sky: {
        text: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        glow: "group-hover:text-sky-400",
      },
      yellow: {
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        glow: "group-hover:text-yellow-400",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-[#e5e5e5] selection:bg-blue-500/30">
      {/* 
        Injecting styles locally for the specific page animations/glassmorphism 
      */}
      <style>{`
        .bg-gradient-mesh {
          background-image: 
            radial-gradient(at 0% 0%, rgba(97, 218, 251, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%);
          background-attachment: fixed;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        .glass-panel:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(97, 218, 251, 0.3);
          box-shadow: 0 0 20px rgba(97, 218, 251, 0.1);
        }
        .text-gradient {
          background: linear-gradient(135deg, #61dafb 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes spin-slow {
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="bg-gradient-mesh min-h-screen">
        {/* Navbar */}
        <nav className="glass-panel fixed top-0 z-50 w-full border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-3">
                {/* React Logo Mockup with Heroicons or just text since we don't have fontawesome loaded by text */}
                <span className="animate-spin-slow text-2xl text-[#61dafb]">
                  ⚛
                </span>
                <span className="text-xl font-bold tracking-tight text-white">
                  React<span className="font-light text-blue-400">School</span>
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative overflow-hidden pt-32 pb-20">
          {/* Glow Effects */}
          <div className="pointer-events-none absolute top-20 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"></div>

          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="glass-panel mb-8 inline-flex animate-[fadeIn_1s_ease-out] items-center gap-2 rounded-full px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#61dafb]"></span>
              <span className="text-sm font-light text-blue-200">
                Phiên bản 2024 Updated
              </span>
            </div>

            <h1 className="mb-6 animate-[slideUp_0.8s_ease-out] text-6xl leading-tight font-extrabold tracking-tighter md:text-8xl">
              Master <span className="text-gradient">Modern React</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl animate-[slideUp_1s_ease-out_0.2s_both] text-lg leading-relaxed font-light text-gray-400 md:text-xl">
              Lộ trình học bài bản từ con số 0 đến chuyên nghiệp.{" "}
              <br className="hidden md:block" />
              Tập trung vào{" "}
              <span class="font-medium text-white">Best Practices</span>,{" "}
              <span class="font-medium text-white">Architecture</span> và{" "}
              <span class="font-medium text-white">Real-world Projects</span>.
            </p>

            <div className="flex animate-[slideUp_1s_ease-out_0.4s_both] flex-col justify-center gap-4 md:flex-row">
              <a
                href="#roadmap"
                className="group relative overflow-hidden rounded-full bg-[#61dafb] px-8 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Bắt đầu ngay{" "}
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 group-hover:translate-y-0"></div>
              </a>
            </div>
          </div>
        </header>

        {/* Roadmap Section */}
        <main id="roadmap" className="mx-auto max-w-7xl px-4 py-20 pb-32">
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-[28px] right-8 left-8 -z-10 hidden h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent lg:block"></div>

            {folders.map((folder, index) => {
              const meta = MODULE_METADATA[folder.name] || {
                title: folder.name,
                description: "Explore this module.",
                icon: CubeTransparentIcon,
                color: "blue",
                features: [],
              };

              const Icon = meta.icon;
              const colors = getColorClasses(meta.color);
              const layoutClass = meta.isCapstone
                ? "md:col-span-2 lg:col-span-3 ring-1 ring-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent"
                : "";
              const ringClass = meta.highlight
                ? "ring-1 ring-emerald-500/30"
                : "";

              // For Capstone, renders differently
              if (meta.isCapstone) {
                return (
                  <Link
                    key={folder.path}
                    href={`/blog/${folder.path}`}
                    className={`glass-panel group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${layoutClass}`}
                  >
                    <div className="flex flex-col items-center gap-8 md:flex-row">
                      <div className="flex-1">
                        <div className="mb-6 flex items-center gap-4">
                          <div
                            className={`h-16 w-16 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} transition-transform group-hover:scale-110`}
                          >
                            {Icon && <Icon className="h-8 w-8" />}
                          </div>
                          <div>
                            <span
                              className={`rounded border px-2 py-1 font-mono text-xs ${colors.border} ${colors.text} mb-1 block w-fit`}
                            >
                              {meta.subtitle}
                            </span>
                            <h3
                              className={`text-3xl font-bold text-white ${colors.glow} transition-colors`}
                            >
                              {meta.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mb-8 text-lg leading-relaxed text-gray-300">
                          {meta.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {meta.features.map((feature, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400"
                            >
                              <SparklesIcon
                                className={`h-3 w-3 ${colors.text}`}
                              />{" "}
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Abstract Visual */}
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-shadow group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] md:w-1/3">
                        <div className="absolute inset-2 rounded-tl-lg border-t border-l border-white/10"></div>
                        <div className="absolute top-4 right-4 left-4 h-4 w-2/3 rounded-full bg-white/5"></div>
                      </div>
                    </div>
                  </Link>
                );
              }

              // Standard Module Card
              return (
                <Link
                  key={folder.path}
                  href={`/blog/${folder.path}`}
                  className={`glass-panel group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${ringClass}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${meta.color}-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
                  ></div>

                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`h-12 w-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} transition-transform group-hover:scale-110`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <span
                      className={`font-mono text-xs ${colors.text} ${colors.bg} rounded border px-2 py-1 ${colors.border}`}
                    >
                      {meta.subtitle ||
                        `MODULE ${String.fromCharCode(65 + index)}`}
                    </span>
                  </div>

                  <h3
                    className={`mb-3 text-2xl font-bold text-white ${colors.glow} transition-colors`}
                  >
                    {meta.title}
                  </h3>
                  <p className="mb-6 min-h-[40px] text-sm leading-relaxed text-gray-400">
                    {meta.description}
                  </p>

                  <div className="border-t border-white/5 pt-4">
                    <ul className="space-y-2">
                      {meta.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <CheckCircleIcon
                            className={`mr-2 h-4 w-4 ${colors.text}`}
                          />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-black/20">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center">
            <p className="text-sm text-gray-500">
              © 2024 React School Curriculum.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
