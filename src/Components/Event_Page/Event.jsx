import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import eventsData from "./events"; // Adjust the import path as needed
import EventsSwiper from "./EventsSwiper";
import Navelement from "../Navelement";

const Event = () => {
  const { deptname, eventname } = useParams(); // Get the URL parameters
  const [menuOpen, setMenuOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState({});
  
  useEffect(() => {
    // Access events data for the specified department
    const departmentData = eventsData[deptname] || [];
    
    // Find the specific event in the department data
    const foundEvent = departmentData.find(event => event.id === eventname) || {};
    setEventDetails(foundEvent);
  }, [deptname, eventname]); // Re-run when deptname or eventname changes

  // Pass the entire department's events data to EventsSwiper
  const departmentEvents = eventsData[deptname] || [];

  return (
    <div className="flex flex-col w-screen h-screen bg-starry-sky overflow-hidden">
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="relative w-screen max-w-5xl h-[500px]">
        <h1 className="w-screen text-4xl font-semibold text-center text-white py-10">
          {eventDetails.title || "EVENT NAME"} {/* Display event title */}
        </h1>
        <EventsSwiper data={departmentEvents} className="absolute top-[50%]"/>
      </div>
    </div>
  );
};

export default Event;
