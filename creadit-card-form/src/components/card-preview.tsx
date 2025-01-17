import { useContext } from "react";
import { CreditCardContext } from "../credit-card/credit-card.context";

export const CardPreview = () => {
  const { card_data } = useContext(CreditCardContext);
  return (
    <div>
      <div>
        <p>card number: {card_data.card_number}</p>
        <p>name: {card_data.card_user_name}</p>
        <p>
          <span>mm: {card_data.card_exp_month}</span>
          <span>yy: {card_data.card_exp_year}</span>
        </p>
      </div>
      <div>
        <p>cod: {card_data.card_code}</p>
      </div>
    </div>
  );
};
