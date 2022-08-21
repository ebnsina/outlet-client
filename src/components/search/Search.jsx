import { SearchIcon } from "@heroicons/react/outline";

export default function Search() {
  return (
    <button
      type="button"
      className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-10 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
    >
      <SearchIcon className="h-6 w-6 text-gray-400" />
      <span className="flex-auto">Quick search...</span>
      <kbd className="font-sans font-semibold dark:text-slate-500">
        <abbr
          title="Command"
          className="no-underline text-slate-300 dark:text-slate-500"
        >
          ⌘
        </abbr>
        K
      </kbd>
    </button>
  );
}
