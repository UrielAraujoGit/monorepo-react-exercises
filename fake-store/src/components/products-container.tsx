import { useState } from "react";
import { TProduct, TProductMini } from "../models/product.type";
import { MiniCardProduct } from "./mini-card-product";
import { fetchProductById } from "../services/api.service";
import { DetailCardProduct } from "./detail-card-product";

export const ProductsContainer = (props: {
  productList: Array<TProductMini>;
}) => {
  const [productSelected, setProductSelected] = useState<TProduct | null>(null);

  const getProductById = async (id: number) => {
    const data = await fetchProductById(id);
    setProductSelected(data);
  };
  return (
    <>
      <div className="flex ">
        {productSelected ? (
          <div className="w-4/5">
            <DetailCardProduct product={productSelected}></DetailCardProduct>
          </div>
        ) : null}

        <div className={productSelected ? "w-1/5" : "w-full"}>
          <div
            className={`grid grid-cols-1 ${
              productSelected ? "" : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {props.productList.map((item) => (
              <MiniCardProduct
                key={item.id}
                product={item}
                handleSelectProduct={() => {
                  getProductById(item.id);
                }}
              ></MiniCardProduct>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
