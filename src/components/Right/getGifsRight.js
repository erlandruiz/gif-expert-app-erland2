
export const getImagesRight = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yp2KKCE0udQR00EsCndPk97mVLDIJiDN&q=${category}&limit=10`;
  
    const response = await fetch(url);
    const {data}= await response.json();
    const gifsRight = data.map((img)=>{
       return(
          {
             id: img.id,
             title: img.title,
             url: img.images.downsized_medium.url
          }
       )
    })
  
    // console.log(gifsRight)
  
    return gifsRight
  
  
  }



  
