import React from 'react';

function WorkshopCard({ title, image, workshop, onCardClick }) {
  console.log(image);
  return (
    <div
      onClick={() => onCardClick(workshop)}
      className="border-1 border-gray-200 relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      aria-role="button"
      aria-label={`View details for ${title}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black flex items-center justify-center">
        <h3 className="m-5 text-3xl font-bold bg-black bg-opacity-30 rounded-2xl text-green-300 text-center px-6 py-4 font-dosis">
          {title}
        </h3>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
}

export default WorkshopCard;
