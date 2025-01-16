import { useContext } from "react";
import { CartContext, TProduct } from "../../cart/cart.context";

export const CartItem = (props: { product: TProduct & { cant: number } }) => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <p>{props.product.cant}</p>
      <button onClick={() => cartContext.removeProduct(props.product.id)}>
        ❌
      </button>
    </div>
  );
};
