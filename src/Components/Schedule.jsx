import React, { useState } from 'react';
import Navelement from './Navelement';
import Footer from './Footer';

// Sample data for demonstration purposes
const scheduleData = {
    "SSN-CSE": '/schedules/CSE (3).png',
    IT: '/schedules/IT (1).png',
    ECE: '/schedules/ECE (1).png',
    EEE: '/schedules/EEE (1).png',
    ME: '/schedules/Mech (1).png',
    CV: '/schedules/CIVIL.png',
    CE: '/schedules/CHEM.png',
    BME: '/schedules/BME.png',
    "SNUC-COMMERCE": '/schedules/commerce.png',
    "SNU-CSE": '/schedules/SNUC - CSE.png',
    // Add more departments and their schedule images here if needed
};

function Schedule() {
  // Initialize the state with a default department
  const defaultDepartment = 'SSN-CSE'; // Choose a default department from your data
  const [selectedDepartment, setSelectedDepartment] = useState(defaultDepartment);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleImageClick = (imageSrc) => {
    window.open(imageSrc, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col items-center">
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/* Dropdown Section */}
      <div className="w-full flex flex-col items-center max-w-md p-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg mt-8 mx-4 z-10">
        <h2 className="text-xl font-bold text-white mb-4 text-center font-dosis">SCHEDULE</h2>
        <select
          className="w-full p-3 bg-gray-800 font-dosis text-sm text-white border border-gray-600 rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
          onChange={handleDepartmentChange}
          value={selectedDepartment}
        >
          <option value="" disabled>Select Department</option>
          {Object.keys(scheduleData).map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      {/* Image Section */}
      {selectedDepartment && (
        <div className="relative flex-grow flex items-center justify-center p-4 w-full mb-10">
          <img
            src={scheduleData[selectedDepartment]}
            alt={`${selectedDepartment} Schedule`}
            className="w-full h-auto max-h-[90vh] object-contain cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={() => handleImageClick(scheduleData[selectedDepartment])}
          />
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default Schedule;
