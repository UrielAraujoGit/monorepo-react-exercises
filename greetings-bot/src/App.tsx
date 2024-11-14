import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">Greetings Bot</h1>
      <button onClick={(e)=> console.log("Hola")}>Click me!</button>
    </>
  );
}

export default App;


// Objetivos: Crear una aplicación donde al darle click a un botón, se muestre un saludo por consola
 
// Requerimientos: Se requiere una vista con un botón, que al darle click, se muestre un mensaje de saludo en la consola del navegador

// Criterios de aceptación: 
// Que exista un botón con el texto "Click me!"
// Que al darle click al btn se muestre el mensaje "Hola!" por la consola del navegador


// Notas técnicas: 
// Los estilos del proyecto no se tendrán en cuenta
// Seguir los lineamientos de git de la tarea épica ( la tarea padre de esta tarea )
// NO es necesario crear un MR ( merge request ) en git
// // El nombre del proyecto será "greetings-bot"