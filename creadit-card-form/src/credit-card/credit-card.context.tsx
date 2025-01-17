import { createContext } from "react";

export type TCreditCardContext = {
  card_data: TCardData;
  set_card_data: React.Dispatch<React.SetStateAction<TCardData>>;
};

export type TCardData = {
  card_user_name: string;
  card_number: number;
  card_exp_month: number;
  card_exp_year: number;
  card_code: number;
};

export const CreditCardContext = createContext<TCreditCardContext>({
  card_data: {
    card_user_name: "",
    card_number: 0,
    card_exp_month: 0,
    card_exp_year: 0,
    card_code: 0,
  },
  set_card_data: () => console.error("set card data fn not implemented!"),
});
