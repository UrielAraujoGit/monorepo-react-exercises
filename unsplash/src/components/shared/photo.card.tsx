export const PhotoCard = (props: {
  img_url: string;
  img_desc?: string;
  fnHandleClick?: () => void;
}) => {
  return (
    <img
      src={props.img_url}
      alt={props.img_desc}
      onClick={props.fnHandleClick}
      className={props.fnHandleClick ? "cursor-pointer" : undefined}
    />
  );
};
