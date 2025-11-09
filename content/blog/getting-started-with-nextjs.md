---
title: "Getting Started with Next.js: A Complete Guide"
date: "2024-12-15"
excerpt: "Learn how to build modern web applications with Next.js, covering routing, server components, and best practices for optimal performance."
tags: ["Next.js", "React", "Web Development"]
---

# Getting Started with Next.js

Next.js has become one of the most popular React frameworks for building production-ready web applications. In this guide, we'll explore the key features that make Next.js powerful.

## Why Next.js?

Next.js provides several advantages over traditional React applications:

- **Server-Side Rendering (SSR)**: Improved SEO and faster initial page loads
- **Static Site Generation (SSG)**: Pre-render pages at build time
- **API Routes**: Build your backend alongside your frontend
- **File-based Routing**: Intuitive routing based on your file structure
- **Image Optimization**: Automatic image optimization out of the box

## Setting Up Your First Project

Getting started with Next.js is straightforward. Use the following command:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

This will create a new Next.js project with all the necessary dependencies and start the development server on `http://localhost:3000`.

## Creating Your First Page

In Next.js, creating a new page is as simple as adding a file to the `app` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}
```

This automatically creates a route at `/about`. No router configuration needed!

## Server Components vs Client Components

Next.js 13+ introduces Server Components by default. Here's when to use each:

### Server Components (Default)

```typescript
// app/products/page.tsx
async function getProducts() {
  const res = await fetch('https://api.example.com/products');
  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Client Components

For interactive components, use the `'use client'` directive:

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## API Routes

Create API endpoints directly in your Next.js app:

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Process the data
  return NextResponse.json({ success: true });
}
```

## Best Practices

Here are some best practices I've learned:

1. **Use Server Components by default** - Only make components client-side when you need interactivity
2. **Optimize images** - Always use the `next/image` component
3. **Implement proper metadata** - Use the Metadata API for SEO
4. **Code splitting** - Next.js does this automatically, but be mindful of bundle sizes
5. **Use environment variables** - Keep sensitive data secure

## Example: Building a Blog

Here's a simple example of fetching and displaying blog posts:

```typescript
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });
}
```

## Conclusion

Next.js is a powerful framework that simplifies building React applications. With built-in SSR, SSG, and API routes, you can build full-stack applications with ease.

Start small, experiment with different features, and gradually adopt best practices as you grow more comfortable with the framework.

Happy coding!
