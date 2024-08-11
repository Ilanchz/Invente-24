import React from 'react';

function HackathonCard({ title, description, date, image }) {
  return (
    <div className="bg-gray-600 bg-opacity-60 shadow-lg rounded-lg overflow-hidden hover:bg-blue-900">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <p className="text-white font-semibold">Date: {date}</p>
      </div>
    </div>
  );
}

export default HackathonCard;
