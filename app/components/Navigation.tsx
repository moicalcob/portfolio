import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 bg-white dark:bg-black backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            portfolio
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/experience"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/blog"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
