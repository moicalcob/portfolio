import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';
import { format } from 'date-fns';

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="relative">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 160px, 192px"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              Software Developer
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
              Building scalable applications and solving complex problems with modern technologies.
              Passionate about clean code, performance optimization, and creating exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/experience"
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-black rounded-lg transition-colors font-medium"
              >
                View Experience
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg transition-colors border border-zinc-200 dark:border-zinc-800 font-medium"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-transparent">
            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Frontend</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-transparent">
            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">Backend</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Node.js, Python, PostgreSQL, MongoDB</p>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-transparent">
            <h3 className="font-semibold mb-2 text-zinc-900 dark:text-zinc-100">DevOps</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Docker, AWS, CI/CD, Git</p>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors bg-zinc-50 dark:bg-transparent"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-500">
                    <time className="font-mono">
                      {format(new Date(post.date), 'MMM dd, yyyy')}
                    </time>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
