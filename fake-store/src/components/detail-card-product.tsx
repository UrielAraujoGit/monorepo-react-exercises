import { TProduct } from "../models/product.type";

export const DetailCardProduct = (props: { product: TProduct }) => {
  return (
    <>
      <div key={props.product.id} className="">
        <p>{props.product.title}</p>
        <img src={props.product.image} alt={props.product.title} />

        <div>
          <p>{props.product.description}</p>
          <p>{props.product.price}</p>
          <p>
            <span className="text-2xl bold">{props.product.rating.rate}</span>
            <span>{props.product.rating.count}</span>
          </p>
        </div>
      </div>
    </>
  );
};
