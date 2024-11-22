export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
};

export type TProductMini = Pick<TProduct, "id" | "title" | "image">;

export type TRating = {
  rate: number;
  count: number;
};
