import { createContext } from "react";

export type TModalContext = {
  openModal: (arg: { element: JSX.Element | null; close: () => void }) => void;
  updateInstallments: (num: number) => void;
  updateAmount: (n: number) => void;
  elem: JSX.Element | null;
  fnClose: () => void;
};

export const ModalContext = createContext<TModalContext>({
  openModal: () => console.error("openModal fn not implemented!"),
  updateInstallments: () =>
    console.error("updateInstallments fn not implemented!"),
  updateAmount: () => console.error("updateAmount fn not implemented!"),
  elem: null,
  fnClose: () => console.error("fnClose fn not implemented!"),
});
