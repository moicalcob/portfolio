import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Blog
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Thoughts on software development, tech insights, and lessons learned
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <svg
              className="w-16 h-16 text-zinc-400 dark:text-zinc-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 mb-2">No posts yet</h2>
            <p className="text-zinc-500">
              Add your first blog post in the <code className="text-blue-600 dark:text-blue-400">content/blog</code> directory
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 bg-zinc-50 dark:bg-transparent rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <time className="text-sm text-zinc-500 font-mono">
                    {format(new Date(post.date), 'MMM dd, yyyy')}
                  </time>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded border border-blue-200 dark:border-blue-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Read more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
