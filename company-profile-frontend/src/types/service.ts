export type ServiceImage = {
  url: string;
  alternativeText?: string | null;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  image: ServiceImage;
};
