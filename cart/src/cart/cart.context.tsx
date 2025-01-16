import { createContext } from "react";

export interface ICartContext {
  cart: TMapProduct;
  addProduct: (product: TProduct, cant?: number) => void;
  removeProduct: (id: number, cant?: number) => void;
}

export type TMapProduct = { [key: string]: TProduct & { cant: number } };

export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export const CartContext = createContext<ICartContext>({
  cart: {},
  addProduct: (prod: TProduct, cant = 1) =>
    console.error("add product fn not implemented!"),
  removeProduct: (id: number, cant = 1) =>
    console.error("remove product fn not implemented!"),
});
