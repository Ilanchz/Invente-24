import React from 'react';
import { FaTrophy, FaUserTie } from 'react-icons/fa';

const EventDesc = ({ first, second,third }) => {
  return (
    <div
      className="flex items-center justify-center p-4 border border-gray-300 rounded-lg shadow-neon bg-darkNeonBlue md:text-2xl gap-4 font-raleway text-sm"
      style={{
        backgroundColor: '#00274d', // Dark neon blue color
        boxShadow: '0 0 10px rgba(0, 83, 255, 0.8)', // Neon glow effect
      }}
    >
      <div className="flex items-center gap-2">
        <FaTrophy className="text-yellow-400" />
        <div>
          <h3 className="text-lg font-bold">1st</h3>
          <p>{first}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
      <FaTrophy className="text-yellow-400" />
        <div>
          <h3 className="text-lg font-bold">2nd</h3>
          <p>{second}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaTrophy className="text-yellow-400" />
        <div>
          <h3 className="text-lg font-bold">3rd</h3>
          <p>{third}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDesc;
