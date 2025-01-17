import { useState } from "react";
import "./App.css";
import { CardForm } from "./components/card-form";
import { CardPreview } from "./components/card-preview";
import {
  CreditCardContext,
  TCardData,
} from "./credit-card/credit-card.context";

function App() {
  const [cardData, setCardData] = useState<TCardData>({
    card_user_name: "",
    card_number: 0,
    card_exp_month: 0,
    card_exp_year: 0,
    card_code: 0,
  });
  return (
    <>
      <h1 className="text-center text-3xl">credit card form</h1>
      <CreditCardContext.Provider
        value={{
          card_data: cardData,
          set_card_data: setCardData,
        }}
      >
        <CardPreview></CardPreview>
        <CardForm></CardForm>
      </CreditCardContext.Provider>
    </>
  );
}

export default App;
