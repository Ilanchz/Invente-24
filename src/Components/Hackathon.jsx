import React, { useState, useEffect } from 'react';
import HackathonCard from './HackathonCard';
import Footer from './Footer';
import hackathon_data from '../data/hackathon_data';
import { Link } from 'react-router-dom';

function Hackathon() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    setHackathons(hackathon_data);
  }, []);

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
      <header className="w-full flex border-b-2 items-center justify-between px-6 py-4 bg-white-500 bg-opacity-60 shadow-md">
        <img src="/snu-logo.svg" alt="Left Logo" className="h-12" />
        <nav className="flex space-x-8">
          <Link to="/" className="text-lg font-bold text-white hover:text-green-600">Home</Link>
          <a href="#events" className="text-lg font-bold text-white hover:text-green-600">Events</a>
          <a href="#schedule" className="text-lg font-bold text-white hover:text-green-600">Schedule</a>
          <a href="#sponsors" className="text-lg font-bold text-white hover:text-green-600">Sponsors</a>
          <a href="#hospitality" className="text-lg font-bold text-white hover:text-green-600">Hospitality</a>
        </nav>
        <img src="/ssn-logo.svg" alt="Right Logo" className="h-12" />
      </header>

      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-8 mt-8">Upcoming Hackathons</h2>
      
      <div className="flex flex-col items-center justify-center space-y-8 overflow-y-auto" style={{ padding: '0 20px', flexGrow: 1 }}>
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="w-full max-w-xl">
            <HackathonCard 
              title={hackathon.title}
              description={hackathon.description}
              date={hackathon.date}
              image={hackathon.image}
            />
          </div>
        ))}
      </div>
      
      <h2 className="mb-8"/>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Hackathon;
