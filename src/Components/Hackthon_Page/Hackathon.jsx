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

  console.log(hackathon_data);

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

      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        <div className="w-full sm:w-1/3 p-4" key="worshop">
        <div 
          className="relative bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
        >
          <img src="./work_coming.jpeg" alt="WorkShop Image" className="w-full h-56 object-cover absolute inset-0 -z-10" />
          <div className="flex items-center justify-center h-48 bg-black bg-opacity-50">
            <h3 className="text-3xl font-bold text-white text-center p-4">Workshops</h3>
          </div>
        </div>
        </div>
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
