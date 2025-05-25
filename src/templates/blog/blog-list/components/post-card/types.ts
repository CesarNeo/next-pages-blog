type TAuthor = {
  name: string;
  avatar: string;
};

type TPostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: TAuthor;
};

export type { TPostCardProps };
