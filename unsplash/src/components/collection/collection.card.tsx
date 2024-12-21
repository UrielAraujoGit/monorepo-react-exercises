import { TCollection } from "../../models/collection.type";
import { getApiCollectionById } from "../../services/api.service";
import { PhotoCard } from "../shared/photo.card";

export const CollectionCard = (props: { collection: TCollection }) => {
  const getCollectionById = async () => {
    const photosData = await getApiCollectionById(props.collection.id);
    console.log(photosData);
  };

  return (
    <div className="rounded border py-2 px-0">
      <h5 className="text-center">{props.collection.title}</h5>
      <PhotoCard
        img_url={props.collection.cover_photo.urls.small || ""}
        img_desc={props.collection.cover_photo.alt_description}
        fnHandleClick={getCollectionById}
        className="h-80 object-cover w-full"
      ></PhotoCard>
      <p className="text-center">{props.collection.total_photos} photo/s</p>
    </div>
  );
};
