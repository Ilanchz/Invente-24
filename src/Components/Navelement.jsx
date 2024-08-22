import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navelement({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine if a link is active based on the current path
  const getLinkClass = (link) => (
    currentPath === link
      ? 'border-2 border-orange-500'
      : 'hover:text-orange-500'
  );

  // Handler to close the menu on link click if menu is open
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div id="nav-bar" className="w-full h-16 md:h-24 flex items-center justify-between px-4 md:px-8 m-5">
      <img src="/snu-logo.svg" alt="SNU" className="w-48 h-12 md:h-16" />
      
      {/* Menu Button for Small Screens */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>
      
      {/* Navigation Links for Larger Screens */}
      <nav className="hidden md:flex items-center space-x-6 md:space-x-12 py-2 font-dosis text-sm md:text-md">
        {['/', '/about', '/#events', '/hackathonAndworkshop', '/schedule', '/sponsors', '/hospitality', '/gallery'].map((link) => (
          <Link
            key={link}
            to={link}
            className={`text-white text-base md:text-lg font-bold transition-transform duration-300 p-2 rounded-lg ${getLinkClass(link)}`}
            onClick={handleLinkClick}
          >
            {link === '/' ? 'Home' :
             link === '/about' ? 'About' :
             link === '/#events' ? 'Events' :
             link === '/hackathonAndworkshop' ? 'Hackathons & Workshop' :
             link === '/schedule' ? 'Schedule' :
             link === '/sponsors' ? 'Sponsors' :
             link === '/hospitality' ? 'Hospitality' :
             'Gallery'}
          </Link>
        ))}
      </nav>

      <img src="/ssn-logo.svg" alt="SSN" className="w-48 h-12 md:h-16" />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
          <nav className="flex flex-col items-center space-y-6 font-dosis text-lg font-bold w-1/2 text-center">
            {['/', '/#events', '/hackathonAndworkshop', '/schedule', '/sponsors', '/hospitality', '/gallery','/about'].map((link) => (
              <Link
                key={link}
                to={link}
                className={`transition-transform w-full p-2 rounded-md ${getLinkClass(link)} bg-white text-black duration-300 hover:scale-110`}
                onClick={handleLinkClick}
              >
                {link === '/' ? 'Home' :
                 link === '/#events' ? 'Events' :
                 link === '/hackathonAndworkshop' ? 'Hackathons & Workshop' :
                 link === '/schedule' ? 'Schedule' :
                 link === '/sponsors' ? 'Sponsors' :
                 link === '/hospitality' ? 'Hospitality' :
                 link  === '/gallery' ? 'Gallery' :
                'About'}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navelement;
