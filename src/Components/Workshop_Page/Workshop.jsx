import React, { useState, useEffect } from 'react';
import WorkshopCard from './WorkshopCard';
import Modal from './WorkshopModal';
import workshop_data from '../../data/workshop_data';

function Workshop() {
  const [workshops, setWorkshops] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  useEffect(() => {
    setWorkshops(workshop_data);
    console.log(workshop_data);
  }, []);

  const openModal = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
  };

  return (
    <div
      className="w-full flex flex-col"
      id="workshop_tab"
      style={{
        backgroundImage: `url('/bg-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <h2 className="text-3xl text-center font-raleway text-blue-500 font-extrabold mb-8 mt-8">UPCOMING HACKATHONS & WORKSHOP</h2>
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {workshops.map((workshop) => (
          <div className="w-full sm:w-1/3 p-4" key={workshop.title}>
            <WorkshopCard
              title={workshop.title}
              image={workshop.image}
              workshop={workshop}
              onCardClick={openModal}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedWorkshop}
        onClose={closeModal}
        workshop={selectedWorkshop}
      />

    </div>
  );
}

export default Workshop;
