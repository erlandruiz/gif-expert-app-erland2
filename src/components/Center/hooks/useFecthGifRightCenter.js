import { useEffect, useState } from "react";
import { getImagesCenter } from "../getGifsCenter";

export const useFecthGifRightCenter = (category) => {
  // craer un estado vacio
  const [imagesCenter, setImagesCenter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCenter = async () => {
    const newImagesCenter = await getImagesCenter(category);
    setImagesCenter(newImagesCenter);
    setIsLoading(false);
  };

  useEffect(() => {
    getCenter();
  }, []);

  return {
    imagesCenter: imagesCenter,
    isLoading: isLoading,
  };
};
