import { useEffect, useState } from "react";
import { getImagesRight } from "../getGifsRight";

export const useFecthGifRight = (category) => {

    const [getRight, setGetRight] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    const getImages = async()=>{
        const newImages = await getImagesRight(category);
        setGetRight (newImages);
        setIsLoading(false)
    }

    useEffect(() => {
    getImages()
    }, [])
 

    return{
        imagesRight: getRight,
        isLoading: isloading
    }
}
