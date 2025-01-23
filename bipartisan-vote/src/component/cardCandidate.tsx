import { useState } from "react";
import { TCandidate } from "../schemas/candidate.type";

export function CardCandidato(props: { candidatin: TCandidate }) {
  const [vote, setVote] = useState(0);
  const sumarVote = () => {
    const votes = vote + 1;
    setVote(votes);
  };
  return (
    <>
      <button
        onClick={() => {
          sumarVote();
        }}
      >
        <h4>{props.candidatin.name}</h4>
        <h4>{vote}</h4>
      </button>
    </>
  );
}
