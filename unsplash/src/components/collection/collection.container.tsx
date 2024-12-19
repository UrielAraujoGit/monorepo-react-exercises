import { TCollection } from "../../models/collection.type";
import { PhotoCard } from "../shared/photo.card";
import { CollectionCard } from "./collection.card";

export const CollectionContainer = (props: {
  collections: Array<TCollection>;
}) => {
  return (
    <div className="collection-container">
      {props.collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
        ></CollectionCard>
      ))}
    </div>
  );
};
