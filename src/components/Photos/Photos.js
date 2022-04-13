import React, { useState } from 'react';
import PhotosHook from '../Hooks/PhotosHook/PhotosHook';
import Photo from '../Photo/Photo';

const Photos = () => {
   const {photos} = PhotosHook();
   const slicePhotos=photos.slice(0,20)

   const [search , setSearch] = useState([])

   const searchHere =(e)=>{
     const getSearchValue = e.target.value.toLowerCase();
     const getData = photos.filter(photos => photos.alt.toLowerCase().includes(getSearchValue));
     setSearch(getData);
   }
   return (
      <div className='container mx-auto  pt-20'>
         <div className="text-center mx-auto ml-4 py-4">
            <input  onChange={searchHere} className='bg-slate-200 focus:ring-indigo-500 focus:border-indigo-500  block px-4 py-2  sm:text-sm border-gray-500 rounded inline-block' type="text" placeholder='search here' />
         </div>
         <div className='container mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
         {
            search.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
         }
      </div>
         <div className="text-center">
            {/* <button className='bg-blue-800 border-none pl-4 pr-4 pt-2 pb-2 my-4 text-xl text-slate-300 rounded-sm hover:bg-blue-700 cursor-pointer'>4K Photos Here</button> */}
         </div>
      </div>
   );
};

export default Photos;