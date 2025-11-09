# Blog Guide

## How to Add New Blog Posts

### 1. Create a Markdown File

Create a new `.md` file in the `content/blog/` directory:

```
content/blog/my-new-post.md
```

### 2. Add Frontmatter

Start your file with frontmatter (metadata):

```markdown
---
title: "Your Post Title"
date: "2024-12-15"
excerpt: "A short description of your post (shown in listings)"
tags: ["Tag1", "Tag2", "Tag3"]
image: "/images/blog/optional-cover-image.jpg"
---

Your content starts here...
```

### 3. Write Content

Use standard Markdown syntax:

#### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```

#### Text Formatting

```markdown
**Bold text**
*Italic text*
`Inline code`
[Link text](https://example.com)
```

#### Code Blocks

Use triple backticks with language specification:

````markdown
```typescript
function example() {
  console.log("Hello!");
}
```
````

Supported languages: javascript, typescript, python, bash, json, css, html, and more.

#### Lists

```markdown
- Unordered item 1
- Unordered item 2

1. Ordered item 1
2. Ordered item 2
```

#### Blockquotes

```markdown
> This is a quote
```

#### Images

```markdown
![Alt text for accessibility](/images/blog/image-name.jpg)
```

## How to Add Images

### Option 1: Local Images (Recommended)

1. Place your image in `public/images/blog/`
2. Reference it in your markdown:

```markdown
![My Image](/images/blog/my-image.jpg)
```

The image will be accessible at `/images/blog/my-image.jpg`

### Option 2: External Images

Use full URLs:

```markdown
![External Image](https://example.com/image.jpg)
```

### Image Best Practices

- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Compress images to <200KB when possible
- **Dimensions**: Use reasonable dimensions (1200px wide max for blog images)
- **Alt text**: Always include descriptive alt text for accessibility

### Example Image Structure

```
public/
  images/
    blog/
      post1-hero.jpg
      post1-diagram.png
      post2-screenshot.jpg
```

## Markdown Features Supported

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

### Horizontal Rule

```markdown
---
```

## Publishing

Once you create or update a markdown file:

1. The blog post will automatically appear on the `/blog` page
2. Posts are sorted by date (newest first)
3. Recent posts (3 most recent) appear on the homepage
4. No build step needed in development - just refresh!

## Example Post Structure

Here's a complete example:

```markdown
---
title: "Getting Started with React Hooks"
date: "2024-12-15"
excerpt: "Learn the basics of React Hooks and how to use them effectively in your components."
tags: ["React", "JavaScript", "Tutorial"]
image: "/images/blog/react-hooks.jpg"
---

# Getting Started with React Hooks

React Hooks revolutionized how we write React components. Let's explore the basics.

## What are Hooks?

Hooks are functions that let you use state and other React features without writing a class.

### useState Example

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

![React Hooks Diagram](/images/blog/hooks-diagram.png)

## Conclusion

Hooks make React code cleaner and more reusable. Start using them in your next project!
```

## Tips

- Use descriptive filenames (they become the URL slug)
- Keep filenames lowercase with hyphens: `my-blog-post.md`
- Write engaging excerpts - they appear in blog listings
- Use tags to categorize your posts
- Add code examples to make posts more valuable
- Include images to break up text and illustrate concepts
