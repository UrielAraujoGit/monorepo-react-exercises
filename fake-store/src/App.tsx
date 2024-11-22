import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContainer } from "./components/products-container";
import { TProduct } from "./models/product.type";

function App() {
  const [products, setProducts] = useState<Array<TProduct>>([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
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
