import React, { useState, useEffect } from 'react';
import HackathonCard from '../HackathonCard';
import Footer from '../Footer';
import hackathon_data from '../../data/hackathon_data';
import Navelement from '../Navelement';

function Hackathon() {
  const [hackathons, setHackathons] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <h2 className="text-3xl text-center font-raleway text-blue-500 font-extrabold mb-8 mt-8">UPCOMING HACKATHONS</h2>
      
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {hackathons.map((hackathon) => (
          <div className="w-full sm:w-1/3 p-4" key={hackathon.title}>
            <HackathonCard 
              title={hackathon.title}
              description={hackathon.description}
              date={hackathon.date}
              image={hackathon.image}
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

export default Hackathon;
