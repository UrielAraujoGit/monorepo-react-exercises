import { TElementNumber } from "../elementNumber.type.ts/elementNumber.type";

function CardElementNumber(props: { unElemNum: TElementNumber }) {
  return (
    <span key={props.unElemNum.idNum}>
      {props.unElemNum.num}
    </span>
  );
}

export default CardElementNumber;
