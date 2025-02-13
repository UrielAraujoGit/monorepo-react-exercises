import { useContext } from "react";
import { getStates } from "../../api/api.service";
import { BoardContext } from "../../context/board.context";
import { TComponentProps } from "../../models/component-props.type";
import { StateCard } from "./state-card";

const StateContainer = (props: TComponentProps<"div">) => {
  const { id_board } = useContext(BoardContext);

  const states = getStates(id_board);

  return (
    <div
      {...props}
      className={`bg-task-mono-700 h-full  ${props.className ?? ""}`}
    >
      <div className="flex gap-5 p-5">
        {Object.keys(states ?? {}).map((id_state) => (
          <StateCard
            key={id_state}
            state={states![id_state]}
            className="w-56"
          ></StateCard>
        ))}
      </div>
    </div>
  );
};

export default StateContainer;
