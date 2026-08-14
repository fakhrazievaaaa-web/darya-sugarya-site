// Статьи блога живут в src/content/blog.json — редактируются через админку (/admin).
// В админке текст статьи — это одно текстовое поле; абзацы разделяются пустой строкой.
import blogData from '@/content/blog.json';

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  shortAnswer: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  body: string; // абзацы разделены пустой строкой (\n\n)
  faq: { question: string; answer: string }[];
  relatedServiceSlug?: string;
};

export const blogPosts: BlogPost[] = blogData.posts as BlogPost[];
