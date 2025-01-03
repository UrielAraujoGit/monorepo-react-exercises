import { PhotoCard } from "../../shared/photo.card";

export const CollectionPhotoCard = (props: {
  img_url: string;
  img_descr?: string;
  className?: string;
}) => {
  return (
    <>
      <PhotoCard
        img_url={props.img_url}
        img_desc={props.img_descr}
        className={props.className}
      ></PhotoCard>
    </>
  );
};
