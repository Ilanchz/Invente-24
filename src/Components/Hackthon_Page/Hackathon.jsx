import React, { useState, useEffect } from 'react';
import HackathonCard from './HackathonCard';
import Footer from '../Footer';
import Modal from './HackathonModal';
import hackathon_data from '../../data/hackathon_data';
import Navelement from '../Navelement';
import Workshop from '../Workshop_Page/Workshop';

function Hackathon() {
  const [hackathons, setHackathons] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHackathons(hackathon_data);
  }, []);

  const openModal = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  const closeModal = () => {
    setSelectedHackathon(null);
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
      <Navelement 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />

      

      <Workshop/>

      
      
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {hackathons.map((hackathon) => (
          <div className="w-full sm:w-1/3 p-4" key={hackathon.title}>
            <HackathonCard 
              title={hackathon.title}
              image={hackathon.image}
              hackathon={hackathon}
              onCardClick={openModal}
            />
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedHackathon} 
        onClose={closeModal} 
        hackathon={selectedHackathon} 
      />

      
      <section className="mt-auto">
        <Footer />
      </section>
    </div>
  );
}

export default Hackathon;
