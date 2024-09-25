import React, { useState, useEffect, useRef } from 'react';
import Navelement from './Navelement';
import Footer from './Footer';

const sponsors = [
  { name: 'Arani Biotech', logo: '/Sponsors/Arani Biotech logo.jpg', url: 'http://www.aranibio.com' },
  { name: 'Azent Overseas Education', logo: '/Sponsors/Azent Overseas Education.png', url: 'https://www.azent.com/' },
  { name: 'Blac & Pink', logo: '/Sponsors/Blac&Pink_Logo.png', url: 'http://www.blacpink.com/' },
  { name: 'CPCL', logo: '/Sponsors/cpcl_logo.jpg', url: 'https://cpcl.co.in/' },
  { name: 'Glooft', logo: '/Sponsors/glooft_logo.PNG', url: 'https://www.glooft.com/' },
  { name: 'HDFC', logo: '/Sponsors/HDFC.jpg', url: 'https://www.hdfcbank.com/' },
  { name: 'IIPL', logo: '/Sponsors/IIPL Logo .png', url: 'https://www.interlaceindia.com/' },
  { name: 'Jana Small Finance Bank', logo: '/Sponsors/Jana_Bank.jpg', url: 'https://www.janabank.com/' },
  { name: 'MOTORQ', logo: '/Sponsors/motorq.png', url: 'https://motorq.com/' },
  { name: 'Nectar Aromass', logo: '/Sponsors/Nectar Aromass.jpeg', url: '#' },
  { name: 'Sakthi Ferro Alloys', logo: '/Sponsors/Sakthi ferro alloys.jpg', url: 'https://www.sakthiferroalloys.com' },
  { name: 'Seyasoft Technology Solutions Pvt Ltd', logo: '/Sponsors/Seyasoft Technology Solutions Pvt Ltd.jpeg', url: 'https://seyasoftech.com/' },
  { name: 'Tamil Nadu Newsprint and Papers Limited', logo: '/Sponsors/Tamil Nadu Newsprint and Papers Limited.jpeg', url: 'https://www.tnpl.com/' },
  { name: 'Typesense', logo: '/Sponsors/typesense_logo.jpg', url: 'https://typesense.org/' },
  { name: 'e-Con Systems', logo: '/Sponsors/e-Con Systems.jpg', url: 'https://www.e-consystems.com/' },
  { name: 'SS Group', logo: '/Sponsors/SS group logo.png', url: 'https://www.ssgroup.biz/' },
  { name: 'Temenos', logo: '/Sponsors/Temenos.jpg', url: 'https://www.temenos.com/' },
  { name: 'Sri Kauvery Hospitals', logo: '/Sponsors/Kauvery_Hospital_Logo.png', url: 'https://www.kauveryhospital.com/' },
  { name: 'Shiva Enterprises', logo: '/Sponsors/sert-logo.png', url: 'https://www.sert.net.in/' },
];



function Sponsors() {
  const [loading, setLoading] = useState(true);
  const sponsorRefs = useRef([]);

  useEffect(() => {
    const imageLoadPromises = sponsors.map((sponsor) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = sponsor.logo;
        img.onload = resolve;
        img.onerror = resolve; // Resolve on error as well
      })
    );

    Promise.all(imageLoadPromises).then(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000); // Wait for 1 second after images load
    });
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center relative">
      <Navelement />
      <div className="relative z-10 p-4 md:p-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center font-dosis">OUR SPONSORS❤️</h2>
        
        {loading ? (
          <div className="flex flex-col items-center gap-2 min-h-screen">
            <div className="animate-spin rounded-full h-20 w-20 border-t-6 border-b-4 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-800">
            {sponsors.map((sponsor, index) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg bg-white"
                ref={el => sponsorRefs.current[index] = el}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-img max-h-full object-contain transition-opacity duration-300 ease-in-out rounded-lg"
                />
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
