import { TProduct, TProductMini } from "../models/product.type";

export const productMinifier = (product: TProduct): TProductMini => {
  return {
    id: product.id,
    price: product.price,
    title: product.title,
    image: product.image,
  };
};
