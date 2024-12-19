import { TCollection } from "../../models/collection.type";
import { PhotoCard } from "../shared/photo.card";

export const CollectionCard = (props: { collection: TCollection }) => {
  return (
    <div>
      <h5>{props.collection.title}</h5>
      <PhotoCard
        img_url={props.collection.cover_photo.urls.small || ""}
        img_desc={props.collection.cover_photo.alt_description}
        fnHandleClick={() =>
          console.log("nos redirigimos a la collection:", props.collection)
        }
      ></PhotoCard>
      <p>{props.collection.total_photos} photo/s</p>
    </div>
  );
};
