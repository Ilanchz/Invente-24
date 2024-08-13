// Event.js
import React, { useState } from "react";
import eventsData from "./events"; // Adjust the import path as needed
import ParticlesComponent from "./particles";
import EventsSwiper from "./EventsSwiper";

const Event = ({ dept }) => {
  // Access events for the specified dep
  const [menuOpen, setMenuOpen] = useState(false);
  const departmentData = eventsData[dept] || {};

  // Extract all categories and events for the department
  const categories = Object.keys(departmentData);

  return (

<div
      className="flex flex-col w-screen h-screen bg-starry-sky overflow-hidden"
    >
      
      <div
        id="nav-bar"
        className="w-full h-16 md:h-24 flex  items-center justify-between px-4 md:px-8 border-b-2 border-white"
      >
        <img src="/snu-logo.svg" alt="SNU" className="h-12 md:h-16" />

        {/* Menu Button for Small Screens */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-12 py-2 font-dosis text-sm md:text-md">
          <a
            href="/#home"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Home
          </a>
          <a
            href="/#events"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Events
          </a>
          <a
            href="/#hackathon"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Hackathon
          </a>
          <a
            href="/#schedule"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Schedule
          </a>
          <a
            href="/#sponsors"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Sponsors
          </a>
          <a
            href="/#hospitality"
            className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300"
          >
            Hospitality
          </a>
        </nav>

        <img src="/ssn-logo.svg" alt="SSN" className="h-12 md:h-16" />
      </div>
      <div className="relative w-screen max-w-5xl h-[500px]">
        <h1
          class="w-screen text-4xl font-semibold text-center text-white py-10"
        >
          EVENT NAME
        </h1>
        <EventsSwiper className="absolute top-[50%]" />
      
      </div>
    </div>
  );
};

export default Event;
