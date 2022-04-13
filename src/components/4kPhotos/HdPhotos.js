import React from 'react';
import PhotosHook from '../Hooks/PhotosHook/PhotosHook';
import Photo from '../Photo/Photo';
import HDphoto from './HDphoto';

const HdPhotos = () => {
   const {photos} = PhotosHook();
   return (
      <div className='container mx-auto  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
         {
            photos.map(photo=><HDphoto photo={photo} key={photo.id}></HDphoto>)
         }
      </div>
   );
};

export default HdPhotos;