import { TCandidato } from "../schemas/candidato.type";

export function CardCandidato(props: {
  candidatin: TCandidato;
  fnSumarVoto: () => void;
}) {
  return (
    <>
      <button>
        <h3>{props.candidatin.name}</h3>
      </button>
      <h4>{props.candidatin.votos}</h4>
    </>
  );
}
