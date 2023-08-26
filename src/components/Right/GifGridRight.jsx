import { useEffect, useState } from "react";
import { getImagesRight } from "./getGifsRight";
import { GifItemRight } from "./GifItemRight";
import { useFecthGifRight } from "./hooks/useFecthGifRight";
import { Loader } from "../Loader";



export const GifGridRight = ({category}) => {

    // agregando un hook

    const {imagesRight, isLoading} = useFecthGifRight(category)

    // creando un usestate
  
    
  return (


    <>
    <h3>{category}</h3>
    {
        isLoading && <Loader/>
    }

    <div className="card-grid">
        {
            imagesRight.map((img)=>{
                return(
                    <GifItemRight key={img.id} img={img}/>
                    // <li key={img.id}>{img.title}</li>
                )

            })
        }

    </div>
    </>
  )
}
