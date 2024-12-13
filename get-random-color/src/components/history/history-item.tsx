import { useState } from "react";

export const HistoryItem = (props: {
  color: string;
  handleSetColor: () => void;
  handleChangeColor: (editedColor: string) => void;
}) => {
  const [edit, setEdit] = useState(false);
  const [newColor, setNewColor] = useState(props.color);

  return (
    <>
      <div
        style={{ backgroundColor: props.color }}
        className="p-2 rounded-lg border border-gray-700"
      >
        <button
          onClick={(e) => {
            if (edit) {
              setNewColor(props.color);
            }
            setEdit(!edit);
          }}
          className="border p-1 rounded-md"
        >
          {edit ? "❌" : "🖊"}
        </button>

        <button
          onClick={() => {
            props.handleSetColor();
            console.log(
              "se setea el color este como nuevo color del 'click-me!'",
              "se vuelve a añadir este color al historial"
            );
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.handleChangeColor(newColor);
              setEdit(false);
            }}
          >
            <input
              type="text"
              readOnly={!edit}
              value={newColor}
              onChange={(e) => setNewColor(e.currentTarget.value)}
              className="bg-transparent"
            />
          </form>
        </button>
      </div>
    </>
  );
};
