import React from 'react';
import { FaTrophy, FaUserTie, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const EventDesc = ({ winner, runner, location, participants, date }) => {
  return (
    <div
      className="flex flex-wrap space-x-10 p-4 border border-gray-300 rounded-lg shadow-neon bg-darkNeonBlue"
      style={{
        backgroundColor: '#00274d', // Dark neon blue color
        boxShadow: '0 0 10px rgba(0, 83, 255, 0.8)', // Neon glow effect
      }}
    >
      <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
        <FaTrophy className="text-yellow-500" />
        <span className="text-white">{winner}</span>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
        <FaUserTie className="text-gray-500" />
        <span className="text-white">{runner}</span>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
        <FaMapMarkerAlt className="text-red-500" />
        <span className="text-white">{location}</span>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto mb-4 sm:mb-0">
        <FaUsers className="text-blue-500" />
        <span className="text-white">{participants}</span>
      </div>
      <div className="flex items-center space-x-2 w-full sm:w-auto">
        <FaCalendarAlt className="text-green-500" />
        <span className="text-white">{date}</span>
      </div>
    </div>
  );
};

export default EventDesc;
