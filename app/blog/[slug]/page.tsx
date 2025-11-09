import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import '../../syntax-theme.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-sm font-medium"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to blog
        </Link>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-500">
            <time className="font-mono text-sm">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
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
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-4 mt-8 text-zinc-900 dark:text-zinc-100">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold mb-3 mt-6 text-zinc-900 dark:text-zinc-100">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold mb-2 mt-4 text-zinc-800 dark:text-zinc-200">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{children}</p>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline transition-colors"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-400">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-2 mb-4 text-zinc-600 dark:text-zinc-400">
                {children}
              </ol>
            ),
            li: ({ children }) => <li className="ml-4">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-zinc-100 dark:bg-zinc-800 text-amber-600 dark:text-yellow-400 px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-200 dark:border-zinc-700 px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              }
              return <code className={className}>{children}</code>;
            },
            pre: ({ children }) => (
              <pre className="!bg-transparent !p-0 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-x-auto my-4 max-w-full">
                {children}
              </pre>
            ),
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt || ''}
                className="rounded-lg my-6 w-full border border-zinc-200 dark:border-zinc-800"
              />
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-zinc-100 dark:bg-zinc-900">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-left text-zinc-900 dark:text-zinc-200">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-zinc-600 dark:text-zinc-400">
                {children}
              </td>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors font-medium"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all posts
        </Link>
      </div>
    </article>
  );
}
