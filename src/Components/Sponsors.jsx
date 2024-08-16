import React,{useState} from 'react';
import Navelement from './Navelement';
import Footer from './Footer';

const sponsors = [
  { name: 'Sponsor One', logo: '', url: 'https://www.sponsor1.com' },
  { name: 'Sponsor Two', logo: '', url: 'https://www.sponsor2.com' },
  { name: 'Sponsor Three', logo: '', url: 'https://www.sponsor3.com' },
  { name: 'Sponsor Four', logo: '', url: 'https://www.sponsor4.com' },
  { name: 'Sponsor Five', logo: '', url: 'https://www.sponsor5.com' },
  // Add more sponsors as needed
];

function Sponsors() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8 relative">
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="relative z-10 p-4 md:p-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center font-dosis">OUR SPONSORS❤️</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 bg-gray-600 p-5 rounded-lg">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-24 md:max-h-32 object-contain transition-opacity duration-300 ease-in-out hover:opacity-80"
              />
            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Sponsors;
