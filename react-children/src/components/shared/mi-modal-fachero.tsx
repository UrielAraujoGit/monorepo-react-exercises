import { ReactNode } from "react";

export const MiModalFachero = (props: {
  children: ReactNode;
  close: () => void;
}) => (
  <div className="absolute bg-slate-800 bg-opacity-50 w-screen h-screen flex justify-center items-center top-0 left-0 p-">
    <div className="bg-white rounded-xl p-5 relative">
      <button onClick={props.close} className="absolute right-4 top-1">
        X
      </button>
      {props.children}
    </div>
  </div>
);
