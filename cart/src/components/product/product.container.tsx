import { TProduct } from "../../cart/cart.context";
import { ProductItem } from "./product.item";

export const ProductContainer = (props: { products: Array<TProduct> }) => {
  return (
    <div>
      <h5>Products</h5>
      {props.products.map((prod) => (
        <ProductItem key={prod.id} product={prod}></ProductItem>
      ))}
    </div>
  );
};
