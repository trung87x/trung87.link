import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

const components = {
  // ... (keep all components exactly as is)
  h1: (props) => (
    <h1
      {...props}
      className="mt-10 mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="group mt-10 mb-4 flex items-center text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-8 mb-3 text-xl font-bold text-slate-900 dark:text-slate-200"
    />
  ),
  h4: (props) => (
    <h4
      {...props}
      className="mt-6 mb-2 text-lg font-semibold text-slate-900 dark:text-slate-300"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-300"
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mb-6 ml-6 list-disc space-y-2 text-lg leading-8 text-slate-700 dark:text-slate-300"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mb-6 ml-6 list-decimal space-y-2 text-lg leading-8 text-slate-700 dark:text-slate-300"
    />
  ),
  li: (props) => <li {...props} className="pl-1" />,
  a: (props) => (
    <a
      {...props}
      className="font-medium text-blue-600 underline decoration-blue-400 decoration-1 underline-offset-2 transition-colors hover:text-blue-800 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-500 dark:hover:text-blue-300"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-8 border-l-4 border-blue-500 bg-slate-50 py-4 pr-4 pl-6 dark:border-blue-400 dark:bg-slate-800/50"
    >
      <div className="text-lg leading-relaxed font-medium text-slate-700 italic dark:text-slate-300">
        {props.children}
      </div>
    </blockquote>
  ),
  code: (props) => {
    // Check if it's a block code (usually has 'language-' class from rehype-highlight)
    const isBlock =
      props.className &&
      (props.className.includes("language-") ||
        props.className.includes("hljs"));

    if (isBlock) {
      return (
        <code
          {...props}
          className={`${props.className || ""} bg-transparent`}
        />
      );
    }

    // Inline code styling
    return (
      <code
        {...props}
        className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm font-medium text-pink-600 dark:bg-slate-800 dark:text-pink-400"
      />
    );
  },
  pre: (props) => (
    <div className="my-8 overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow-lg dark:bg-black/50">
      <div className="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/50 px-4 py-2 text-xs font-medium text-slate-400">
        <span>Code</span>
        {/* Future: Copy button could go here */}
      </div>
      <pre
        {...props}
        className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-slate-50"
      />
    </div>
  ),
  hr: (props) => (
    <hr {...props} className="my-12 border-slate-200 dark:border-slate-800" />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-slate-200 shadow-sm dark:border-slate-700">
      <table
        {...props}
        className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700"
      />
    </div>
  ),
  thead: (props) => (
    <thead {...props} className="bg-slate-50 dark:bg-slate-800" />
  ),
  th: (props) => (
    <th
      {...props}
      className="px-6 py-3 font-semibold text-slate-900 dark:text-slate-200"
    />
  ),
  tbody: (props) => (
    <tbody
      {...props}
      className="divide-y divide-slate-200 bg-white dark:divide-slate-700 dark:bg-slate-900"
    />
  ),
  td: (props) => (
    <td {...props} className="px-6 py-4 text-slate-700 dark:text-slate-300" />
  ),
  img: (props) => (
    // Render regular img tag but styled. MDX often passes src/alt.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className="my-8 h-auto w-full rounded-xl border border-slate-200 shadow-md dark:border-slate-700 dark:bg-slate-800"
      loading="lazy"
    />
  ),
};

export function RemoteMDX({ source }) {
  return (
    <div className="prose-container mx-auto max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </div>
  );
}
