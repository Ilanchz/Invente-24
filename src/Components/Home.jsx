import React, { useState } from 'react';
import Footer from './Footer';
import TimelineSection from './TimelineSection';
import MovingGalleries from './MovingGalleries';
import CountdownTimer from './CountdownTimer';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-screen flex flex-col items-center p-3 overflow-x-hidden bg-cover bg-center bg-starry-sky'>
      <div className="relative w-screen sm:h-large flex flex-col items-center justify-center overflow-hidden rounded-xl">
        <div className="w-full h-full bg-deep-charcoal-gradient flex flex-col backdrop-blur-3xl" id="home">
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
            <img src="/invente24_orange.png" alt="Invente Logo" className=" -z-10 mt-10 mb-10 lg:mt-28 lg:mb-0 lg:absolute inset-x-0 mx-auto max-w-xs md:max-w-sm md:scale-150 hover:animate-pulse" />
            
            <div id="home-text" className='flex flex-col items-center'>
            <span className="font-dosis font-extralight text-xl md:text-2xl block text-center md:text-left">OUR THEME THIS YEAR</span>
            <span className="font-libre font-bold text-4xl md:text-6xl block mt-2 text-center md:text-left text-green-200">Eco-volution</span>
            <pre className="font-dosis font-normal text-base md:text-lg whitespace-pre-line mt-4 text-center md:text-left">Evolving Technology for a Sustainable Future</pre>
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
          </div>
          <div>
          <img src="/SDN-Goals.png" alt="SDN Goals" className="lg:block hidden absolute bottom-4 right-4 md:right-12 w-64 md:w-96" />
          </div>
          
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

      <section>
        <CountdownTimer />
      </section>

      <section className='flex items-center flex-col m-3' id="events">
        <div className='font-dosis text-2xl sm:text-4xl text-white p-10'>Welcome to the events page</div>
        <img src="Earth-spin.gif" className='w-64 h-64 rounded-full mt-6'></img>
        <TimelineSection/>
        {/* <img src="SDG/SDG-Title.webp" alt="title" className='w-64 rounded-full'/> */}
      </section>

      {/* <section>
        <MovingGalleries/>
      </section> */}

      

      {/* New Sections Below */}
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
