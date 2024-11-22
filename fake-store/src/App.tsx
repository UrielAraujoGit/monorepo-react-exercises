import { useEffect, useState } from "react";
import "./App.css";
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
      {products.map((prod) => (
        <div key={prod.id}>
          <p>{prod.title}</p>
          <img src={prod.image} alt={prod.title} />
          <p>{prod.description}</p>
          <p>{prod.price}</p>
        </div>
      ))}
    </>
  );
}

export default App;
