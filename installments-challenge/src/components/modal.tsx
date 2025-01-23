import { useContext } from "react";
import { ModalContext } from "../modal/modal.context";

export const Modal = () => {
  const modalData = useContext(ModalContext);
  return (
    <>
      {modalData.elem ? (
        <div>
          <button
            onClick={() => {
              console.log("close modal clicked!");
              modalData.fnClose();
              modalData.openModal({
                element: null,
                close: () => console.error("fn close empty!"),
              });
            }}
          >
            ❌
          </button>
          <div>{modalData.elem}</div>
        </div>
      ) : null}
    </>
  );
};
