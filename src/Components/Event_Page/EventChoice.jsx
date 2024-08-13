import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import Footer from '../Footer';
import eventsData from './events';
import Navelement from '../Navelement';

function EventChoice() {
  // Use useParams to get the department name from the URL
  const { deptname } = useParams();
  const [events, setEvents] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set events based on the department name from the URL
    setEvents(eventsData[deptname] || []);
  }, [deptname]);

  const handleEventClick = (eventId) => {
    // Navigate to the event details page
    const url = `/department/${deptname}/${eventId}`;
    navigate(url);
  };

  return (
    <div 
      className="w-full min-h-screen flex flex-col" 
      id="hackathon_tab"
      style={{ 
        backgroundImage: `url('/bg-image.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <h2 className="text-3xl text-center font-raleway text-blue-500 font-extrabold mb-8 mt-8">{deptname}</h2>
      
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {events.map((event) => (
          <div 
            className="w-full sm:w-1/3 p-4 cursor-pointer" 
            key={event.id} 
            onClick={() => handleEventClick(event.id)} // Handle click
          >
            <EventCard
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          </div>
        ))}
      </div>
      
      <section className="mt-auto">
        <Footer />
      </section>
    </div>
  );
}

export default EventChoice;
