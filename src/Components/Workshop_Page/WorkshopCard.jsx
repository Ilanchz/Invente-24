import React from 'react';

function WorkshopCard({ title, image, workshop, onCardClick }) {
  return (
    <div
      onClick={() => onCardClick(workshop)}
      className="relative bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <img src={image} alt={title} className="w-full object-cover absolute inset-0 -z-10 h-full" />
      <div className="relative flex items-center justify-center bg-black bg-opacity-50 py-4">
        <h3 className="text-3xl font-bold text-white text-center p-4">{title}</h3>
      </div>
    </div>
  );
}

export default WorkshopCard;
