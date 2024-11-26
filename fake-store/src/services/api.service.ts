import { TProduct } from "../models/product.type";
import { productMinifier } from "../utils/product-minifier.util";

export const fetchProductById = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: TProduct = await response.json();
  return data;
};

export const fetchAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: Array<TProduct> = await response.json();
  return data.map(productMinifier);
};
