import { useContext } from "react";
import { ModalContext } from "../modal/modal.context";

export const CalculatorContainer = () => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      <input type="number" className="border " id="total-amount" />
      <input type="number" className="border " id="date" />

      <button
        className="uppercase border px-2 py-1"
        onClick={() => {
          modalContext.openModal({
            element: <p>credito: $$$</p>,
            close: () => {
              modalContext.updateAmount(Math.ceil(Math.random() * 100000));
            },
          });
        }}
      >
        obtené crédito
      </button>
      <button
        className="uppercase border px-2 py-1"
        onClick={() => {
          modalContext.openModal({
            element: <p>cuotas 1,2 y 3</p>,
            close: () => {
              modalContext.updateInstallments(Math.ceil(Math.random() * 24));
            },
          });
        }}
      >
        ver detalle de cuotas
      </button>
    </>
  );
};
