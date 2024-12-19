import { useEffect, useState } from "react";
import { TCollection } from "../../models/collection.type";
import { getApiRandomCollection } from "../../services/api.service";
import { CollectionContainer } from "./collection.container";

export const CollectionPage = () => {
  const [collections, setCollections] = useState<Array<TCollection>>([]);

  const getRandomCollection = async () => {
    const collectionsData = await getApiRandomCollection();
    setCollections(collectionsData);
  };

  useEffect(() => {
    getRandomCollection();
  }, []);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert((e.currentTarget[0] as HTMLInputElement).value);
        }}
      >
        <input type="text" className="border rounded" />
        <button>🔎</button>
      </form>
      <CollectionContainer collections={collections}></CollectionContainer>
    </>
  );
};
