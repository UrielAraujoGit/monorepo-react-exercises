import { TProduct } from "../models/product.type";

export const CardProduct = (props: { product: TProduct }) => {
  return (
    <>
      <div key={props.product.id}>
        <p>{props.product.title}</p>
        <img src={props.product.image} alt={props.product.title} />
        <p>{props.product.description}</p>
        <p>{props.product.price}</p>
      </div>
    </>
  );
};
