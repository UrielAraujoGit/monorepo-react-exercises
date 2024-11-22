import { TProductMini } from "../models/product.type";

export const MiniCardProduct = (props: { product: TProductMini }) => {
  return (
    <>
      <div key={props.product.id}>
        <p>{props.product.title}</p>
        <img src={props.product.image} alt={props.product.title} />
      </div>
    </>
  );
};
