---
title: "Building a Modern Portfolio Website"
date: "2024-12-01"
excerpt: "A step-by-step guide to creating a professional portfolio website with Next.js and Tailwind CSS, complete with a markdown-based blog."
tags: ["Portfolio", "Next.js", "Web Design"]
image: "/images/blog/portfolio-hero.jpg"
---

# Building a Modern Portfolio Website

Creating a portfolio website is essential for showcasing your work and skills. In this post, I'll share how I built this site using modern web technologies.

## Design Considerations

When designing a portfolio, focus on:

- **Clean, minimal design** - Let your work speak for itself
- **Fast loading times** - Optimize images and code
- **Mobile responsiveness** - Most visitors browse on mobile
- **Clear navigation** - Easy to find what they're looking for

![Portfolio Design Mockup](/images/blog/portfolio-mockup.jpg)

*Example of a clean portfolio design*

## Technology Stack

Here's what I used:

```typescript
const techStack = {
  framework: 'Next.js 15',
  styling: 'Tailwind CSS',
  blog: 'Markdown + gray-matter',
  syntax: 'highlight.js',
  deployment: 'Vercel'
};
```

### Why Next.js?

Next.js provides several benefits:

1. **Server-side rendering** for better SEO
2. **File-based routing** - simple and intuitive
3. **Image optimization** out of the box
4. **Static generation** for fast page loads

## Adding a Blog

A blog demonstrates your expertise. I used markdown files stored in `content/blog/`:

```
content/
  blog/
    post-1.md
    post-2.md
    post-3.md
```

Each markdown file has frontmatter metadata:

```markdown
---
title: "Post Title"
date: "2024-12-01"
excerpt: "Short description"
tags: ["Tag1", "Tag2"]
image: "/images/blog/cover.jpg"
---

Your content here...
```

## Image Optimization

For blog images, I store them in `public/images/blog/` and reference them like:

```markdown
![Description](/images/blog/image-name.jpg)
```

You can also use external images:

```markdown
![External Image](https://example.com/image.jpg)
```

![Code Example Screenshot](/images/blog/code-example.png)

*Example of syntax highlighting in action*

## Performance Tips

1. **Optimize images** before uploading
   - Use WebP format when possible
   - Compress images (aim for <200KB)
   - Use appropriate dimensions

2. **Lazy load content** where appropriate

3. **Minimize JavaScript** - only load what's needed

## File Structure

Here's the project structure I use:

```
portfolio/
├── app/
│   ├── page.tsx          # Home page
│   ├── experience/       # Work experience
│   ├── blog/             # Blog listing & posts
│   └── components/       # Reusable components
├── content/
│   └── blog/             # Markdown blog posts
├── public/
│   └── images/
│       └── blog/         # Blog images
└── lib/
    └── blog.ts           # Blog utilities
```

## Deployment

Deploy to Vercel with one command:

```bash
vercel deploy
```

Or connect your GitHub repo for automatic deployments on every push.

## Conclusion

Building a portfolio doesn't have to be complicated. Focus on showcasing your work, keep the design clean, and make sure it loads fast.

The markdown-based blog approach makes it easy to add new content regularly - just create a new `.md` file and deploy!

## Resources

Here are some helpful resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Markdown Guide](https://www.markdownguide.org)

Happy building!
