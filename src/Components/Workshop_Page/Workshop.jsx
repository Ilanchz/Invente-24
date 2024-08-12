import React, { useState, useEffect } from 'react';
import WorkshopCard from './WorkshopCard';
import Footer from '../Footer';
import Workshop_data from '../../data/workshop_data';
import Navelement from '../Navelement';

function Workshop() {
  const [Workshops, setWorkshops] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setWorkshops(Workshop_data);
  }, []);

  return (
    <div 
      className="w-full min-h-screen flex flex-col" 
      id="Workshop_tab"
      style={{ 
        backgroundImage: `url('/bg-image.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <h2 className="text-3xl text-center font-raleway text-blue-500 font-extrabold mb-8 mt-8">UPCOMING WORKSHOPS</h2>
      
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {Workshops.map((Workshop) => (
          <div className="w-full sm:w-1/3 p-4" key={Workshop.title}>
            <WorkshopCard 
              title={Workshop.title}
              description={Workshop.description}
              date={Workshop.date}
              image={Workshop.image}
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

export default Workshop;
