import { useState } from "react";


export function ComponenteCandidato(props: {nombre:string}) {
  const [voto, setVotos] = useState<number>(0)

  return (
    <div>
      <button onClick={()=>{
       setVotos(voto + 1 )
      }}>{props.nombre}</button>
      <p>{voto}</p>

    </div>
  );
}
