import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">Multiple Dropdown Filter</h1>
    </>
  );
}

export default App;

// Objetivos: Crear una aplicación donde se listen opciones seleccionables, y al darle click estas opciones se marquen como "activas"
 
// Requerimientos: Se requiere una vista con un una lista de opciones, donde al darle click a una opción, se marque esa opción como "actriva" y al vovler a clickarla se marcará como "no activa". Se pueden seleccionar múltiples ocpiones.

// Criterios de aceptación: 
// Que exista una lista de opciones 
// Que al darle click a una opción, esta se marque como "activa"
// Que al darle click otra vez, esta se marque como "no activa"
// Que se pueda seleccionar mas de una opción
// Que exista un límite de opciones mostradas, modificable por código ( 5 )
// Si la cantidad de opciones supera el límite, se debe agregar con el mismo diseño que una opción, un btn con el signo +[nro de opciones restantes], que depliegue la lista de las opciones NO mostradas 
// Que cada vez que se modifiquen las opciones "activas", se emita un evento que se capturará desde app.tsx con un objeto con la siguiente inteface 
//  { [idOpcion]: boolean }
// ejemplo : {
// "elias": true,
// "juan": true,
// }

// Notas técnicas: 
// Los estilos del proyecto no se tendrán en cuenta
// Seguir los lineamientos de git de la tarea épica ( la tarea padre de esta tarea )
// NO es necesario crear un MR ( merge request ) en git
// El nombre del proyecto será "multiple-dropdown-filter"

//https://picsum.photos/id/1${id}/200/200