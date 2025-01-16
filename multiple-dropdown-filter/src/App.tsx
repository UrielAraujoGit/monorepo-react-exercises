import { useState } from "react";
import "./App.css";
import { TContactList } from "./models/contacts-list.type";
import { contactList } from "./utils/contact-list";

function App() {

  const [people, setPeople] = useState<TContactList[]>(contactList)
  

  const fnIsActive = (id: string) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, isActive: !person.isActive } : person
      )
    );
  };
  
  const activePeople = people.filter((person) => person.isActive);
  const visiblePeople = activePeople.slice(0, 5);
  const hiddenPeople = activePeople.slice(5);

  return (
    <>
      <header>
        <h1 className="text-center text-3xl">Multiple Dropdown Filter</h1>
      </header>
      <section>
        <h2>Lista de Contactos a Seleccioinar</h2>
        <ul className="m-4 h-96 box-content overflow-auto">
        
          {people.map((person) => (
            <li 
              key={person.id}
              onClick={() => fnIsActive(person.id)}
              className="flex gap-2 items-center m-3"
              >
              <img 
                src={`https://picsum.photos/id/1${person.id}/100/100`} 
                className="border-cyan-800 rounded-full"
                alt="Avatar" />
              <span>{person.name} - {person.isActive ? "Activo" : "Inactivo"}</span>
            </li>
          ))}

    
          
        </ul>
      </section>
      <div>
      {visiblePeople.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}

      {hiddenPeople.length > 0 && (
        <div>
          +{hiddenPeople.length}
          <div className="hiddenHover">
            {hiddenPeople.map((person) => (
              <div key={person.id}>{person.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
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