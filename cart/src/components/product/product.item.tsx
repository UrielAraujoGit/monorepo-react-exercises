import { useContext } from "react";
import { CartContext, TProduct } from "../../cart/cart.context";

export const ProductItem = (props: { product: TProduct }) => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <button onClick={() => cartContext.addProduct(props.product)}>➕</button>
    </div>
  );
};
