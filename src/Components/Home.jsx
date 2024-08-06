import React, { useState } from 'react';
import Footer from './Footer';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-screen flex flex-col items-center p-3 bg-black overflow-x-hidden'>
      <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="w-full h-full bg-gradient-to-r from-custom-green to-custom-brown flex flex-col">
          <div id="nav-bar" className="w-full h-16 md:h-24 flex items-center justify-between px-4 md:px-8 border-b-2 border-white">
            <img src="/snu-logo.svg" alt="SNU" className="h-12 md:h-16" />
            
            {/* Menu Button for Small Screens */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✖' : '☰'}
            </button>
            
            {/* Navigation Links for Larger Screens */}
            <nav className="hidden md:flex items-center space-x-6 md:space-x-12 py-2 font-dosis text-sm md:text-md">
              <a href="#home" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Home</a>
              <a href="#events" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Events</a>
              <a href="#hackathon" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hackathon</a>
              <a href="#schedule" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Schedule</a>
              <a href="#sponsors" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Sponsors</a>
              <a href="#hospitality" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hospitality</a>
            </nav>

            <img src="/ssn-logo.svg" alt="SSN" className="h-12 md:h-16" />
          </div>

          <div id="home-content" className="flex flex-col items-center md:items-start px-4 md:px-16 mt-6 md:mt-12 text-white font-bold">
            <img src="/Invente-Logo.png" alt="Invente Logo" className="mt-10 mb-10 lg:mt-28 lg:mb-0 lg:absolute inset-x-0 mx-auto max-w-xs md:max-w-sm" />
            
            <span className="font-dosis font-extralight text-3xl md:text-4xl block text-center md:text-left">OUR THEME THIS YEAR</span>
            <span className="font-dosis font-extralight text-3xl md:text-4xl block mt-2 text-center md:text-left">UN - SDG Goals</span>
            <span className="font-dosis font-bold text-2xl md:text-4xl block mt-6 text-center md:text-left">About Invente</span>
            <pre className="font-dosis font-normal text-base md:text-lg whitespace-pre-line mt-4 text-center md:text-left">
              {`Looking for fun? You've come to the right place!
Since 2016, Invente has been our flagship techfest,
catered to challenge the spirits and intellects of students
nationwide.`}
            </pre>
            <button className="text-black font-libre font-extralight w-40 md:w-44 bg-white rounded-xl p-4 md:p-5 mt-6 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
              Get Passes
            </button>

            <pre className="font-libre font-extralight text-base md:text-lg whitespace-pre-line mt-4 text-center">
              {`Grab your registrations now,
we look forward to seeing you here soon!!`}
            </pre>
          </div>

          <img src="/SDN-Goals.png" alt="SDN Goals" className="lg:block hidden absolute bottom-4 right-4 md:right-12 w-64 md:w-96" />
        </div>

        {/* Overlay Menu for Small Screens */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <nav className="flex flex-col items-center space-y-6 font-dosis text-lg text-white">
              <a href="#home" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Home</a>
              <a href="#events" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Events</a>
              <a href="#hackathon" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hackathon</a>
              <a href="#schedule" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Schedule</a>
              <a href="#sponsors" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Sponsors</a>
              <a href="#hospitality" className="transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hospitality</a>
            </nav>
          </div>
        )}
      </div>

      {/* New Sections Below */}
      <section className="w-full py-12 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-6">Have questions or need more information? Reach out to us through the contact details below.</p>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-2">Email: contact@invente.com</p>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-6">Address: 123 Invente St, Tech City, TC 45678</p>
          <button className="text-black font-libre font-extralight bg-white rounded-xl p-4 md:p-5 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>
      <section>
        <Footer />
      </section>

      <section className="w-screen py-4 bg-gray-900 text-white text-center font-dosis font-medium">
        <p className="text-lg">
          Website: Built by <a href="#" className="text-gray-50 hover:underline">Name 1</a>, 
          <a href="#" className="text-gray-50 hover:underline"> Name 2</a>, 
          <a href="#" className="text-gray-50 hover:underline"> Name 3</a>, 
          <a href="#" className="text-gray-50 hover:underline"> Name 4</a>.&#160;
          Designed by <a href="#" className="text-gray-50 hover:underline"> Name 5</a> and&#160;
          <a href="#" className="text-gray-50 hover:underline">Name 6</a>.
        </p>
      </section>
    </div>
  );
}

export default Home;
