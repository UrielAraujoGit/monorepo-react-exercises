import { TProduct } from "../../cart/cart.context";
import { NavBar } from "../navbar";
import { ProductContainer } from "./product.container";

const products_mock: Array<TProduct> = [
  {
    id: 1,
    name: "papas x kg",
    price: 500,
  },
  {
    id: 2,
    name: "manzanas x kg",
    price: 2500,
  },
  {
    id: 3,
    name: "naranjas x kg",
    price: 800,
  },
  {
    id: 4,
    name: "bananas x kg",
    price: 2000,
  },
];

export const ProductPage = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ProductContainer products={products_mock}></ProductContainer>
    </div>
  );
};
