export const getImagesCenter = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yp2KKCE0udQR00EsCndPk97mVLDIJiDN&q=${category}&limit=10`;

    const response = await fetch(url);
    const {data} = await response.json();

    const gifsCenter = data.map((img)=>{
       return(
          {
             id: img.id,
             title: img.title,
             username : img.username,
             url: img.images.downsized_medium.url
          }
       )
    });

    // console.log(gifsCenter)

    return(gifsCenter)
    


 }