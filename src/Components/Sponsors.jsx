import React, { useState, useEffect } from 'react';
import Navelement from './Navelement';
import Footer from './Footer';

// Array of sponsors
const sponsors = [
  { name: 'Arani Biotech', logo: '/Sponsors/Arani Biotech logo.jpg', url: '#' },
  { name: 'Azent Overseas Education', logo: '/Sponsors/Azent Overseas Education.png', url: '#' },
  { name: 'Blac & Pink', logo: '/Sponsors/Blac&Pink_Logo.png', url: '#' },
  { name: 'CPCL', logo: '/Sponsors/cpcl_logo.jpg', url: '#' },
  { name: 'Glooft', logo: '/Sponsors/glooft_logo.PNG', url: '#' },
  { name: 'IIPL', logo: '/Sponsors/IIPL Logo .png', url: '#' },
  { name: 'MOTORQ', logo: '/Sponsors/MOTORQ_logo.png', url: '#' },
  { name: 'Nectar Aromass', logo: '/Sponsors/Nectar Aromass.jpeg', url: '#' },
  { name: 'Sakthi Ferro Alloys', logo: '/Sponsors/Sakthi ferro alloys.jpg', url: '#' },
  { name: 'Seyasoft Technology Solutions Pvt Ltd', logo: '/Sponsors/Seyasoft Technology Solutions Pvt Ltd.jpeg', url: '#' },
  { name: 'Tamil Nadu Newsprint and Papers Limited', logo: '/Sponsors/Tamil Nadu Newsprint and Papers Limited.jpeg', url: '#' },
  { name: 'Typesense', logo: '/Sponsors/typesense_logo.jpg', url: '#' },
];

// Function to shuffle the sponsors array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

// Function to get random sizes for collage effect
const getRandomSize = () => {
  const sizes = ['sm', 'md','lg'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

function Sponsors() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const shuffledSponsors = shuffleArray([...sponsors]);
  const sizes = shuffledSponsors.map(() => getRandomSize());

  function showAllImages(){
    setAllImagesLoaded(true);
  }

  useEffect(() => {
    const totalImages = shuffledSponsors.length;
    let loadedImagesCount = 0;

    const handleImageLoad = () => {
      loadedImagesCount += 1;
      if (loadedImagesCount === totalImages) {
        setTimeout(showAllImages,1000);
      }
    };

    // Attach load event to each image
    const imgElements = document.querySelectorAll('.sponsor-img');
    imgElements.forEach(img => {
      img.addEventListener('load', handleImageLoad);
    });

    // Cleanup event listeners
    return () => {
      imgElements.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [shuffledSponsors]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center relative">
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="relative z-10 p-4 md:p-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center font-dosis">OUR SPONSORS❤️</h2>
        
        {!allImagesLoaded && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}
        
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-4 bg-gray-800 ${allImagesLoaded ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'}`}>
          {shuffledSponsors.map((sponsor, index) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl ${sizes[index] === 'lg' ? 'col-span-3 row-span-2' : 'col-span-4 row-span-3'}`}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="sponsor-img max-h-full object-contain transition-opacity duration-300 ease-in-out rounded-lg"
                style={{ opacity: allImagesLoaded ? 1 : 0 }}
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
