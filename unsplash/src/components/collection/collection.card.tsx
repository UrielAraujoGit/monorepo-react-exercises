import { TCollection } from "../../models/collection.type";
import { PhotoCard } from "../shared/photo.card";

export const CollectionCard = (props: {
  collection: TCollection;
  getCollectionById: () => void;
}) => {
  return (
    <div className="rounded border py-2 px-0">
      <h5 className="text-center">{props.collection.title}</h5>
      <PhotoCard
        img_url={props.collection.cover_photo.urls.small || ""}
        img_desc={props.collection.cover_photo.alt_description}
        fnHandleClick={props.getCollectionById}
        className="h-80 object-cover w-full"
      ></PhotoCard>
      <p className="text-center">{props.collection.total_photos} photo/s</p>
    </div>
  );
};
