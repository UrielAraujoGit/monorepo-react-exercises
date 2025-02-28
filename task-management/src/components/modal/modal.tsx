import { createPortal } from "react-dom";
import { TComponentProps } from "../../models/component-props.type";

export const Modal = (
  props: TComponentProps<"div"> & {
    show: boolean;
    showChange: (show: boolean) => void;
  }
) => {
  const close = () => props.showChange(false);
  const modalContent = (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-svh w-svw bg-slate-950 bg-opacity-50 flex justify-center items-center">
        <div className="bg-task-mono-600 p-5  relative rounded-lg">
          <button
            onClick={close}
            className="px-2 py-1 hover:ring rounded-md mb-1"
          >
            X
          </button>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
  return (
    <>
      {props.show
        ? createPortal(modalContent, document.getElementById("modal")!)
        : null}
    </>
  );
};
