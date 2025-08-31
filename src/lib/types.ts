export type Post = {
  title: string;
  description?: string;
  slug: string;
  publishedAt: string;
  body?: string;
  cover?: {
    formats?: {
      large?: {
        url: string;
      };
    };
  };
  category?: {
    title?: string;
    slug?: string;
  };
  author?: {
    name?: string;
  };
};