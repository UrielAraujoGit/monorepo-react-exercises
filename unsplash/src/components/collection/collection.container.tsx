import { useState } from "react";
import { TCollection } from "../../models/collection.type";
import { CollectionCard } from "./collection.card";
import { CollectionPhotoContainer } from "./collection-photos/collection-photos.container";

export const CollectionContainer = (props: {
  collections: Array<TCollection>;
}) => {
  const [collectionSelected, setCollectionSelected] = useState<string | null>(
    null
  );

  return (
    <>
      {collectionSelected ? (
        <CollectionPhotoContainer
          id={collectionSelected}
        ></CollectionPhotoContainer>
      ) : null}

      <div className="collection-container grid grid-cols-3 gap-3">
        {props.collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
            getCollectionById={() => setCollectionSelected(collection.id)}
          ></CollectionCard>
        ))}
      </div>
    </>
  );
};
