import Link from "next/link";
import {
  AcademicCapIcon,
  CommandLineIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Engineering Knowledge Hub",
  description: "Premium engineering curricula for modern developers.",
};

export default function BlogRootPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans selection:bg-blue-500/30 dark:bg-[#0d1117]">
      {/* Hero Header */}
      <header className="border-b border-gray-200 bg-white px-4 py-20 text-center dark:border-[#30363d] dark:bg-[#0d1117]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
            <SparklesIcon className="h-4 w-4" />
            <span>Premium Learning Paths</span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl dark:text-white">
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Knowledge Hub
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-400">
            Curated roadmaps and deep-dive curricula to take you from Junior to
            Senior Engineer. Choose your path below.
          </p>
        </div>
      </header>

      {/* Featured Courses Grid */}
      <div className="mx-auto -mt-8 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* React School Card */}
          <Link
            href="/blog/react.school"
            className="group relative block h-full"
          >
            <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur-sm transition-transform group-hover:scale-[1.02] group-hover:opacity-100 group-hover:shadow-2xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all dark:border-[#30363d] dark:bg-[#161b22]">
              {/* Badge */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <AcademicCapIcon className="h-8 w-8" />
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wider text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-300">
                  Best Seller
                </span>
              </div>

              <h2 className="mb-3 text-3xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                React School
              </h2>
              <p className="mb-8 flex-grow leading-relaxed text-gray-600 dark:text-gray-400">
                Lộ trình học React bài bản từ con số 0 đến chuyên nghiệp. Tập
                trung vào Best Practices, Architecture và Projects thực tế.
              </p>

              <div className="mt-auto border-t border-gray-100 pt-6 dark:border-gray-800">
                <div className="flex items-center font-semibold text-blue-600 transition-transform group-hover:translate-x-2 dark:text-blue-400">
                  Start Learning <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* MDN Curriculum Card */}
          <Link
            href="/blog/developer.mozilla.org"
            className="group relative block h-full"
          >
            <div className="absolute inset-0 transform rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 blur-sm transition-transform group-hover:scale-[1.02] group-hover:opacity-100 group-hover:shadow-2xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all dark:border-[#30363d] dark:bg-[#161b22]">
              {/* Badge */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400">
                  <CommandLineIcon className="h-8 w-8" />
                </div>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold tracking-wider text-orange-700 uppercase dark:bg-orange-900/30 dark:text-orange-300">
                  Hard Core
                </span>
              </div>

              <h2 className="mb-3 text-3xl font-bold text-gray-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                MDN Engineer
              </h2>
              <p className="mb-8 flex-grow leading-relaxed text-gray-600 dark:text-gray-400">
                A roadmap from Junior to Senior. Master the artifacts of modern
                web engineering. Based on generic developer standards.
              </p>

              <div className="mt-auto border-t border-gray-100 pt-6 dark:border-gray-800">
                <div className="flex items-center font-semibold text-orange-600 transition-transform group-hover:translate-x-2 dark:text-orange-400">
                  Explore Curriculum <ArrowRightIcon className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
