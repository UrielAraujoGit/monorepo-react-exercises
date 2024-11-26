import { useEffect, useState } from "react";
import "./App.css";
import { ProductsContainer } from "./components/products-container";
import { TProductMini } from "./models/product.type";
import { fetchAllProducts } from "./services/api.service";

function App() {
  const [products, setProducts] = useState<Array<TProductMini>>([]);

  const getProducts = async () => {
    const data = await fetchAllProducts();
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
