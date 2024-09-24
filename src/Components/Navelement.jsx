import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navelement({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navigate = useNavigate(); 
  const currentPath = location.pathname;

  const getLinkClass = (link) => (
    currentPath === link
      ? 'text-orange-600 underline'
      : 'hover:text-orange-500'
  );

  const handleLinkClick = (event, link) => {
    if (link === '/#events') {
      event.preventDefault();

      setTimeout(() => {
        const element = document.querySelector('#events');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error("Element with ID 'events' not found. Redirecting to homepage.");
          navigate('/'); 
        }
      }, 0);
    } else {
      navigate(link);
    }

    setMenuOpen(false); 
  };

  return (
    <div id="nav-bar" className="w-full h-16 md:h-24 flex items-center justify-between px-4 md:px-8 m-5">
      <img src="/snu-logo.svg" alt="SNU" className="w-1/3 md:w-full h-14" />
      
      <button
        className="xl:hidden text-white text-3xl justify-center md:w-full w-1/3"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </button>
      
      <nav className="md:w-full w-1/3 hidden xl:flex items-center space-x-6 md:space-x-12 py-2 font-dosis text-sm md:text-md">
        {['/', '/#events', '/about', '/hackathonAndworkshop', '/schedule', '/sponsors', '/hospitality', '/gallery'].map((link) => (
          <Link
            key={link}
            to={link}
            className={`text-white text-base md:text-md font-bold text-center transition-transform duration-300 p-2 rounded-lg ${getLinkClass(link)}`}
            onClick={(event) => handleLinkClick(event, link)}
          >
            {link === '/' ? 'Home' :
             link === '/about' ? 'About' :
             link === '/#events' ? 'Events' :
             link === '/hackathonAndworkshop' ? 'Hackathons/Workshop' :
             link === '/schedule' ? 'Schedule' :
             link === '/sponsors' ? 'Sponsors' :
             link === '/hospitality' ? 'Hospitality' :
             'Gallery'}
          </Link>
        ))}
      </nav>

      <img src="/ssn-logo.svg" alt="SSN" className="md:w-full w-1/3 h-10 md:h-16" />

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
            {['/', '/#events','/about', '/hackathonAndworkshop', '/schedule', '/sponsors', '/hospitality', '/gallery'].map((link) => (
              <Link
                key={link}
                to={link}
                className={`transition-transform w-full p-2 rounded-md ${getLinkClass(link)} bg-white text-center text-black duration-300 hover:scale-110`}
                onClick={(event) => handleLinkClick(event, link)}
              >
                {link === '/' ? 'Home' :
                 link === '/#events' ? 'Events' :
                 link === '/hackathonAndworkshop' ? 'Hackathons/Workshop' :
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
