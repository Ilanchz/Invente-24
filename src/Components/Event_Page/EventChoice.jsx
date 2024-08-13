import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HackathonCard from '../HackathonCard';
import Footer from '../Footer';
import eventsData from './events';
import Navelement from '../Navelement';

function EventChoice({ dept }) {
  const [events, setEvents] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Import useNavigate for navigation

  useEffect(() => {
    setEvents(eventsData[`${dept}`]);
  }, [dept]);

  const handleEventClick = (event) => {
    const url = `/department/${dept}/${event.id}`;
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

      <h2 className="text-3xl text-center font-raleway text-blue-500 font-extrabold mb-8 mt-8">{dept}</h2>
      
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {events.map((event) => (
          <div 
            className="w-full sm:w-1/3 p-4 cursor-pointer" 
            key={event.title} 
            onClick={() => handleEventClick(event)} // Handle click
          >
            <HackathonCard 
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
