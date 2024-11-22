import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContainer } from "./components/products-container";
import { TProduct, TProductMini } from "./models/product.type";
import { productMinifier } from "./utils/product-minifier.util";

function App() {
  const [products, setProducts] = useState<Array<TProductMini>>([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: Array<TProduct> = await response.json();
    setProducts(data.map(productMinifier));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl">fake store</h1>
      <ProductsContainer productList={products}></ProductsContainer>
    </>
  );
}

export default App;
