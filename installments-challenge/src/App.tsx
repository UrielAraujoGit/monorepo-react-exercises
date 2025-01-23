import { useState } from "react";
import "./App.css";
import { CalculatorContainer } from "./components/calculator-container";
import { ModalContext } from "./modal/modal.context";
import { Modal } from "./components/modal";

function App() {
  const [modalElement, setModalElement] = useState<{
    element: JSX.Element | null;
    close: () => void;
  }>({
    element: null,
    close: () => console.error("close fn not implemented!"),
  });

  const [installments, setInstallments] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h1 className="text-center text-3xl">Simulá tu crédito</h1>
      <p>cuotas: {installments}</p>
      <p>monto: {amount}</p>
      <ModalContext.Provider
        value={{
          openModal: setModalElement,
          updateInstallments: setInstallments,
          updateAmount: setAmount,
          elem: modalElement.element,
          fnClose: modalElement.close,
        }}
      >
        <Modal></Modal>
        <CalculatorContainer></CalculatorContainer>
      </ModalContext.Provider>
    </>
  );
}

export default App;
