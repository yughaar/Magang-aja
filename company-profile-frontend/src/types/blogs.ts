export interface BlogImage {
  id: number;
  url: string;
  alternativeText: string | null;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  description: string;
  categories: string;
  date: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: BlogImage;
}
