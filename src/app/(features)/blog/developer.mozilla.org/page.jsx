import Link from "next/link";
import { getRepoContent } from "@/utils/github";
import { CommandLineIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "MDN Engineer Curriculum",
  description:
    "A roadmap from Junior to Senior. Master the artifacts of modern web engineering.",
};

export default async function MDNCurriculumPage() {
  const rootContent = await getRepoContent("developer.mozilla.org");

  // Filter for valid category folders (A-, B-, etc.)
  const categoryFolders =
    rootContent && Array.isArray(rootContent)
      ? rootContent.filter((item) => item.type === "dir" && !item.isSinglePost)
      : [];

  // Parallel fetch for all category children to get modules
  const categoriesWithModules = await Promise.all(
    categoryFolders.map(async (folder) => {
      const modules = await getRepoContent(folder.path);
      // Filter modules (sub-folders)
      const validModules =
        modules && Array.isArray(modules)
          ? modules.filter((m) => m.type === "dir") // Assuming modules are folders like A-01-...
          : [];
      return {
        ...folder,
        modules: validModules,
      };
    }),
  );

  return (
    <div className="min-h-screen bg-[#0d1117] pb-16 font-sans text-[#c9d1d9]">
      {/* Header */}
      <header className="mb-12 border-b border-[#30363d] bg-[radial-gradient(circle_at_top,#1f2428_0%,#0d1117_100%)] py-16 text-center">
        <div className="container mx-auto max-w-6xl px-5">
          <h1 className="mb-4 bg-gradient-to-r from-[#58a6ff] to-[#ff7b72] bg-clip-text text-5xl font-extrabold text-transparent">
            MDN Engineer Curriculum
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[#8b949e]">
            A roadmap from Junior to Senior. Master the artifacts of modern web
            engineering.
          </p>
        </div>
      </header>

      {/* Roadmap Container */}
      <div className="relative container mx-auto max-w-6xl px-5">
        {/* Connecting Line (Desktop) */}
        <div className="absolute top-0 bottom-0 left-1/2 z-0 hidden w-0.5 -translate-x-1/2 bg-[#30363d] md:block"></div>

        {/* Dynamic Folders as "Categories" */}
        {categoriesWithModules.map((category, index) => {
          // Determine styling based on index (Cycle: Green, Blue, Orange, Purple, Red)
          const styleCycle = [
            { borderColor: "#7ee787", color: "#7ee787", label: "A" },
            { borderColor: "#a5d6ff", color: "#a5d6ff", label: "B" },
            { borderColor: "#ffa657", color: "#ffa657", label: "C" },
            { borderColor: "#d2a8ff", color: "#d2a8ff", label: "D" },
            { borderColor: "#ff7b72", color: "#ff7b72", label: "E" },
          ];
          const style = styleCycle[index % styleCycle.length];

          // Clean Layout Name: "A-foundation-and-tools" -> "Foundation & Tools"
          // If the folder name strictly follows "A-foundation...", we can extract deeper.
          // Or just standard capitalization.
          const displayName = category.name
            .replace(/^[A-Z]-/, "") // Remove prefix like "A-"
            .replace(/-/g, " "); // Replace dashes

          return (
            <section key={category.path} className="relative z-10 mb-16">
              {/* Category Header */}
              <div className="mb-8 flex justify-center">
                <span
                  className="z-10 rounded-full border-2 bg-[#161b22] px-6 py-2 text-lg font-bold capitalize shadow-xl"
                  style={{ borderColor: style.borderColor, color: style.color }}
                >
                  {style.label}. {displayName}
                </span>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 gap-5 pl-5 md:grid-cols-2 md:pl-0 lg:grid-cols-3">
                {category.modules.map((module) => {
                  // Module Name: "A-01-automated-environment"
                  // Code: "A-01"
                  // Title: "Automated Environment"
                  const parts = module.name.split("-");
                  // Assuming format "A-01-some-name"
                  // Code is first two parts? or just first part if "A-01" is one unit?
                  // Usually split by dashes: ["A", "01", "automated", "environment"]
                  // Let's try to extract intuitively.

                  let moduleCode = "";
                  let moduleTitle = module.name;

                  // Simple heuristic for "A-01-" prefix
                  const match = module.name.match(/^([A-Z]-\d+)-(.*)/);
                  if (match) {
                    moduleCode = match[1]; // "A-01"
                    moduleTitle = match[2].replace(/-/g, " "); // "automated environment"
                  } else {
                    // Fallback
                    moduleCode =
                      style.label +
                      "-0" +
                      (category.modules.indexOf(module) + 1);
                    moduleTitle = module.name.replace(/-/g, " ");
                  }

                  return (
                    <Link
                      key={module.path}
                      href={`/blog/${module.path}`}
                      className="group block rounded-xl border border-[#30363d] bg-[#161b22] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                      style={
                        {
                          // Using inline style for dynamic hover border color is tricky in React/Tailwind without arbitrary group-hover
                          // We will rely on Tailwind group-hover text color or specific border classes if possible.
                          // For exact color match on hover border, we can use style but hover needs state or CSS variable.
                          // Let's use Tailwind's arbitrary group-hover for now, closest approximation.
                        }
                      }
                    >
                      <span className="mb-2 block font-mono text-sm text-[#8b949e]">
                        {moduleCode}
                      </span>
                      <div className="mb-2 text-xl font-semibold text-[#c9d1d9] capitalize transition-colors group-hover:text-white">
                        {moduleTitle}
                      </div>
                      <div className="text-sm text-[#8b949e]">
                        {/* 
                          Description is likely inside the MD files or undefined. 
                          We leave a generic placeholder or omit. 
                        */}
                        Explore module.
                      </div>
                      {/* 
                         To mimic the hover border color:
                         We can add a hidden element or use CSS variables if we want perfection.
                         Or simpler: <style jsx> locally for this specific ID.
                         For now, let's use a standard blue hover to keep it clean, or map color.
                      */}
                      <div
                        className="mt-4 h-0.5 w-0 bg-gradient-to-r from-transparent via-[currentColor] to-transparent opacity-0 transition-all group-hover:w-full group-hover:opacity-100"
                        style={{ color: style.borderColor }}
                      ></div>
                    </Link>
                  );
                })}

                {category.modules.length === 0 && (
                  <div className="col-span-full rounded-xl border border-dashed border-[#30363d] p-6 text-center text-[#8b949e] italic">
                    No modules found in this category.
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {categoriesWithModules.length === 0 && (
          <div className="relative z-10 rounded-xl border border-[#30363d] bg-[#161b22] py-20 text-center">
            <CommandLineIcon className="mx-auto mb-4 h-16 w-16 text-[#8b949e]" />
            <h3 className="mb-2 text-xl font-bold">Initializing content...</h3>
            <p className="text-[#8b949e]">Repo content is loading or empty.</p>
          </div>
        )}
      </div>

      <footer className="py-16 text-center text-sm text-[#8b949e]">
        <p>MDN Remake Project 2026</p>
      </footer>
    </div>
  );
}
