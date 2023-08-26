import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridRight } from "./Right/GifGridRight";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loader } from "./Loader";






export const GifGrid = ({ category }) => {



  const {images, isLoading} = useFetchGifs(category)

  console.log(images, isLoading)



 


  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && <Loader/>
      }

      <div className='card-grid'>
        {
          images.map((img)=> {
            return(
              
               <GifItem key={img.id} {...img}/>
              // <li key={img.id}>{img.title} </li>
              
             
             
            )
          })

        }
        
      </div>
     
    </>
  );
};
