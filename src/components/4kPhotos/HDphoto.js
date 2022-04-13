import React from 'react';

const HDphoto = ({photo}) => {
   return (
      <div className="photos">
      <div className="border-4 rounded-lg bg-zinc-200">
      <div className="">
         <img style={{width:'100%', height:'350px'}}
            src={photo.src.original}
            alt={photo.id}
            className="w-full h-full object-center object-cover"
         />
      </div>
      <div className="p-4">
         <h3 className="mt-6 text-sm text-gray-500">
            <a className="text-lg hover:text-indigo-700" href={photo.src.original}>{photo.alt}</a>
         </h3>
         <a href={photo.photographer_url} className={"hover:text-indigo-700 mt-4"}>photographer : <strong>{photo.photographer}</strong></a>
      </div>
      </div>
   </div>
   );
};

export default HDphoto;