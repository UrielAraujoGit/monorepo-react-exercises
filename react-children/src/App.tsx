import { useState } from "react";
import "./App.css";
import { MiModalFachero } from "./components/shared/mi-modal-fachero";
import { Formulario } from "./components/formulario";
import { DetalleCompra } from "./components/detalle-compra";

function App() {
  const [showModalForm, setShowModalForm] = useState(false);
  const [showModalDetalleCompra, setShowModalDetalleCompra] = useState(false);

  return (
    <>
      <h1 className="text-center text-3xl">react children</h1>
      <button onClick={(e) => setShowModalForm(!showModalForm)}>
        Abrir modal formulario
      </button>
      <button
        onClick={(e) => setShowModalDetalleCompra(!showModalDetalleCompra)}
      >
        Ver detalle de compra
      </button>

      {showModalForm ? (
        <MiModalFachero close={() => setShowModalForm(false)}>
          <Formulario></Formulario>
        </MiModalFachero>
      ) : null}
      {showModalDetalleCompra ? (
        <MiModalFachero close={() => setShowModalDetalleCompra(false)}>
          <DetalleCompra></DetalleCompra>
        </MiModalFachero>
      ) : null}
    </>
  );
}

export default App;
