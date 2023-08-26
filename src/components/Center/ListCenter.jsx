import { useEffect, useState } from "react";
import { getImagesCenter } from "./getGifsCenter";
import { GifItemCenter } from "./GifItemCenter";
import { useFecthGifRightCenter } from "./hooks/useFecthGifRightCenter";
import { Loader } from "../Loader";

export const ListCenter = ({ category }) => {
  // creando Un Hooks

  const { imagesCenter, isLoading } = useFecthGifRightCenter(category);

  return (
    <>
      <h3>{category}</h3>
      {
         isLoading && <Loader/>
      }
      <ol className="olListCenter">
        {imagesCenter.map((img) => {
          return (
            <GifItemCenter key={img.id} img={img} />

            // <li key={img.id}>{img.title}</li>
          );
        })}
      </ol>
    </>
  );
};
