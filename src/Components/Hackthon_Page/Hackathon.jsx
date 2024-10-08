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

  // console.log(hackathon_data);

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-gradient-to-br from-gray-800 to-black"
      id="hackathon_tab"
    >
      <Navelement 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />

    <div className='m-5 bg-gray-950 rounded-xl flex flex-col'>

    <h1 className="md:text-5xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400 hover:from-yellow-400 hover:to-pink-600 text-center font-libre font-light mb-8 mt-8">
      Hackathons
    </h1>
      

      
      
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
      <div className=' self-center w-4/5 border-gray-100 border-b-1 border-opacity-25'></div>


      <Modal 
        isOpen={!!selectedHackathon} 
        onClose={closeModal} 
        hackathon={selectedHackathon} 
      />

    <h1 className="md:text-5xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-green-400 hover:from-green-400 hover:to-blue-800 text-center font-libre font-light mb-8 mt-8">
      Workshops
    </h1>

    <Workshop/>
    <div className=' self-center w-4/5 border-gray-100 border-b-1 border-opacity-25 mb-20'></div>

    </div>

      
    
      <section className="mt-auto">
        <Footer />
      </section>
    </div>
  );
}

export default Hackathon;
