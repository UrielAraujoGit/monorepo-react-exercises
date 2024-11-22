import { TProductMini } from "../models/product.type";
import { MiniCardProduct } from "./card-product";

export const ProductsContainer = (props: {
  productList: Array<TProductMini>;
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {props.productList.map((item) => (
          <MiniCardProduct key={item.id} product={item}></MiniCardProduct>
        ))}
      </div>
    </>
  );
};
