import React from 'react';

function HackathonCard({ title, image }) {
  return (
    <div className="relative bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-56 object-cover absolute inset-0 -z-10" />
      <div className="flex items-center justify-center h-48 bg-black bg-opacity-50">
        <h3 className="text-3xl font-bold text-white text-center p-4">{title}</h3>
      </div>
    </div>
  );
}

export default HackathonCard;
