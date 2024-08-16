import React from 'react';
import { FaTrophy, FaUserTie, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const EventDesc = ({ winner, runner, location, participants, date }) => {
  return (
    <div
      className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-neon bg-darkNeonBlue text-xs md:text-sm gap-4" 
      style={{
        backgroundColor: '#00274d', // Dark neon blue color
        boxShadow: '0 0 10px rgba(0, 83, 255, 0.8)', // Neon glow effect
      }}
    >
      <div className="flex items-center">
        <FaTrophy className="text-yellow-500" />
        <span className="text-white">{winner}</span>
      </div>
      <div className="flex items-center">
        <FaUserTie className="text-gray-500" />
        <span className="text-white">{runner}</span>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-red-500" />
        <span className="text-white">{location}</span>
      </div>
      <div className="flex items-center">
        <FaUsers className="text-blue-500" />
        <span className="text-white">{participants}</span>
      </div>
      <div className="flex items-center">
        <FaCalendarAlt className="text-green-500" />
        <span className="text-white">{date}</span>
      </div>
    </div>
  );
};

export default EventDesc;
