import { TColor } from "../../schema/color.type";
import { HistoryItem } from "./history-item";

export const HistoryContainer = (props: {
  history: Array<TColor>;
  fnHandleSetColor: (c: string) => void;
  fnHandleChangeColors: (colors: Array<TColor>) => void;
}) => {
  return (
    <>
      <div className="flex gap-2 flex-wrap">
        {props.history.map((item) => (
          <HistoryItem
            key={item.id}
            color={item.rgb}
            handleSetColor={() => {
              props.fnHandleSetColor(item.rgb);
            }}
            handleChangeColor={(c) => {
              const newColors = props.history.map((color) => {
                return color.id === item.id
                  ? {
                      ...color,
                      rgb: c,
                    }
                  : color;
              });
              props.fnHandleChangeColors(newColors);
            }}
          ></HistoryItem>
        ))}
      </div>
    </>
  );
};
