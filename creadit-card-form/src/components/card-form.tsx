import { useContext, useState } from "react";
import {
  CreditCardContext,
  TCardData,
} from "../credit-card/credit-card.context";

export const CardForm = () => {
  const { card_data, set_card_data } = useContext(CreditCardContext);

  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCode, setCardCode] = useState("");

  const updateCardData = (data: Partial<TCardData>) => {
    set_card_data({
      ...card_data,
      ...data,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("userName", userName);
        console.log("cardNumber", cardNumber);
        console.log("cardExpMonth", cardExpMonth);
        console.log("cardExpYear", cardExpYear);
        console.log("cardCode", cardCode);
        // const formData = new FormData(e.currentTarget);
        // console.log(formData.get("user_name"));
      }}
    >
      <label htmlFor="card_holder_name" className="w-full block p-2">
        card holder name
        <input
          className="px-2 py-1 border rounded-lg"
          id="card_holder_name"
          value={userName}
          onChange={(e) => {
            setUserName(e.currentTarget.value);
            updateCardData({ card_user_name: e.currentTarget.value });
          }}
          type="text"
          placeholder="Pepe Argento"
        />
      </label>

      <label htmlFor="card_number" className="w-full block p-2">
        card number
        <input
          className="px-2 py-1 border rounded-lg"
          id="card_number"
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.currentTarget.value);
            updateCardData({ card_number: Number(e.currentTarget.value) });
          }}
          type="number"
          placeholder="1234 5678 9123 0000"
        />
      </label>

      <label htmlFor="exp_date_mm" className="w-full block p-2">
        exp. date (mm/yy)
        <input
          className="px-2 py-1 border rounded-lg"
          id="exp_date_mm"
          value={cardExpMonth}
          onChange={(e) => {
            setCardExpMonth(e.currentTarget.value);
            updateCardData({ card_exp_month: Number(e.currentTarget.value) });
          }}
          type="number"
          placeholder="MM"
        />
        <input
          className="px-2 py-1 border rounded-lg"
          id="exp_date_yy"
          value={cardExpYear}
          onChange={(e) => {
            setCardExpYear(e.currentTarget.value);
            updateCardData({ card_exp_year: Number(e.currentTarget.value) });
          }}
          type="number"
          placeholder="YY"
        />
      </label>

      <label htmlFor="card_cvc" className="w-full block p-2">
        cvc
        <input
          className="px-2 py-1 border rounded-lg"
          id="card_cvc"
          value={cardCode}
          onChange={(e) => {
            setCardCode(e.currentTarget.value);
            updateCardData({ card_code: Number(e.currentTarget.value) });
          }}
          type="number"
          placeholder="cod"
        />
      </label>
      <button
        className="border px-2 py-1 rounded-md bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={
          !userName.trim() ||
          !Number(cardNumber) ||
          !Number(cardExpMonth) ||
          !Number(cardExpYear) ||
          !Number(cardCode) ||
          cardCode.trim().length < 3
        }
      >
        Confirm
      </button>
    </form>
  );
};
