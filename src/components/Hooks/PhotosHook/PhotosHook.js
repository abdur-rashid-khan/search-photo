import { useEffect, useState } from 'react';

const PhotosHook = () => {
   const [photos , setPhotos]=useState([]);
   useEffect(()=>{
      fetch("https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=150&page=1", {
      "method": "GET",
      "headers": {
         "authorization": "563492ad6f9170000100000128721d21fa784324bd6733a8b7dbcd57",
         "x-rapidapi-host": "PexelsdimasV1.p.rapidapi.com",
         "x-rapidapi-key": "79866c2ce0msh6babce6b65e709cp17cfc3jsndd33e7b32f6d"
      } })
   .then(response =>response.json())
   .then(data=>setPhotos(data.photos))
   },[]);
   return {photos , setPhotos }
}

export default PhotosHook;