import { useEffect, useState } from "react";
import { TCollection, TPhoto } from "../../../models/collection.type";
import {
  getApiCollectionById,
  getApiCollectionPhotosById,
} from "../../../services/api.service";
import { CollectionPhotoCard } from "./collection-photo.card";
import { Pagination } from "../../shared/pagination";
import { useParams } from "react-router";

export const CollectionPhotoContainer = () => {
  const id = useParams().id;

  const [collection, setCollection] = useState<TCollection | null>(null);
  const [photos, setPhotos] = useState<Array<TPhoto>>([]);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const totalPages = collection
    ? Math.ceil(collection?.total_photos / perPage)
    : 0;

  const getCollectionById = async (id: string) => {
    const collection_data = await getApiCollectionById(id);
    setCollection(collection_data);
  };

  const getCollectionPhotosById = async (
    id: string,
    page: number,
    perPage: number
  ) => {
    const photos_data = await getApiCollectionPhotosById(id, page, perPage);
    setPhotos(photos_data);
  };

  useEffect(() => {
    if (typeof id !== "undefined") {
      getCollectionById(id);
    }
  }, [id]);

  useEffect(() => {
    if (typeof id !== "undefined") {
      getCollectionPhotosById(id, page, perPage);
    }
  }, [id, page, perPage]);

  return (
    <>
      <div>
        <h5>Collection: {collection?.title}</h5>
        <p>photos: {collection?.total_photos}</p>

        <div className="collection-photos-list flex flex-wrap gap-2">
          {photos.map((photo) => (
            <CollectionPhotoCard
              key={photo.id}
              img_url={photo.urls.regular!}
              className="w-40 object-cover"
            />
          ))}
        </div>

        <Pagination
          page={page}
          perPage={perPage}
          totalPages={totalPages}
          fnHandleChangePage={(newpage) => setPage(newpage)}
          fnHandleChangePerPage={(newPerPage) => setPerPage(newPerPage)}
        ></Pagination>
      </div>
    </>
  );
};
