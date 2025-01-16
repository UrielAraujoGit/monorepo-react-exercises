import { useState } from "react";
import "./App.css";
import { CartContext, TMapProduct, TProduct } from "./cart/cart.context";
import { ProductPage } from "./components/product/product.page";
import { CartPage } from "./components/cart/cart.page";

function App() {
  const [cart, setCart] = useState<TMapProduct>({});

  const addProduct = (prod: TProduct, cant = 1) => {
    if (cart[prod.id]) {
      cart[prod.id].cant = cart[prod.id].cant + cant;
    } else {
      cart[prod.id] = { ...prod, cant };
    }

    setCart({ ...cart });
  };

  const deleteProduct = (id: number, cant = 1) => {
    if (cart[id]) {
      const prodCant = cart[id].cant - cant;
      if (prodCant <= 0) {
        delete cart[id];
      } else {
        cart[id].cant = prodCant;
      }
    } else {
      console.error("product not found in cart");
    }

    setCart({ ...cart });
  };
  return (
    <>
      <h1 className="text-center text-3xl">cart</h1>
      <CartContext.Provider
        value={{
          cart,
          addProduct,
          removeProduct: deleteProduct,
        }}
      >
        <div className="grid grid-cols-2">
          <ProductPage></ProductPage>
          <CartPage></CartPage>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
