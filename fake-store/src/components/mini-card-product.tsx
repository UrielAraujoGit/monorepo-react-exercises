import { TProductMini } from "../models/product.type";

export const MiniCardProduct = (props: {
  product: TProductMini;
  handleSelectProduct: () => void;
}) => {
  return (
    <>
      <div key={props.product.id} onClick={props.handleSelectProduct}>
        <p>{props.product.title}</p>
        <img src={props.product.image} alt={props.product.title} />
      </div>
    </>
  );
};
