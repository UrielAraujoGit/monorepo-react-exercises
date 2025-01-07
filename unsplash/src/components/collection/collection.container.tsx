import { TCollection } from "../../models/collection.type";
import { CollectionCard } from "./collection.card";

export const CollectionContainer = (props: {
  collections: Array<TCollection>;
}) => {
  const redirectToPhotosByCollectioonId = (id: string) => {
    window.location.href = "./collections/" + id;
  };
  return (
    <>
      <div className="collection-container grid grid-cols-3 gap-3">
        {props.collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            getCollectionById={() =>
              redirectToPhotosByCollectioonId(collection.id)
            }
          ></CollectionCard>
        ))}
      </div>
    </>
  );
};
