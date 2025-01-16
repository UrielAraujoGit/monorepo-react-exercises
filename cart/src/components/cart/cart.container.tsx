import { useContext } from "react";
import { CartContext } from "../../cart/cart.context";
import { CartItem } from "./cart.item";

export const CartContainer = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <h5>Cart</h5>

      {Object.values(cartContext.cart).map((prod) => (
        <CartItem key={prod.id} product={prod}></CartItem>
      ))}
    </div>
  );
};
