import React from 'react';

function WorkshopCard({ title, image, workshop, onCardClick }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2 p-6 opacity-40">
        <div className="w-full p-4" key="worshop">
        <div 
          className="w-full relative bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <img src="./work_coming.jpeg" alt="WorkShop Image" className="w-full h-56 object-cover absolute inset-0 -z-10" />
          <div className="flex items-center justify-center h-48 bg-black bg-opacity-50">
            <h3 className="text-3xl font-bold text-white text-center p-4">Workshops</h3>
          </div>
        </div>
        </div>
      </div>  
  );
}

export default WorkshopCard;
