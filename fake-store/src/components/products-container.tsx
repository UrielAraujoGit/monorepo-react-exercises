import { TProduct } from "../models/product.type";
import { CardProduct } from "./card-product";

export const ProductsContainer = (props: { productList: Array<TProduct> }) => {
  return (
    <>
      {props.productList.map((item) => (
        <CardProduct key={item.id} product={item}></CardProduct>
      ))}
    </>
  );
};
