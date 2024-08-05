import React from 'react';

function Home() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-r from-custom-green to-custom-brown">
        <div id="nav-bar" className="w-screen h-40 flex flex-col justify-between px-8 border-b-2 border-white">
          <div className="flex items-center justify-between">
            <img src="/snu-logo.svg" alt="snu" className="h-40 w-40" />
            <nav className="flex items-center space-x-12 py-4 font-dosis text-md">
              <a href="#home" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Home</a>
              <a href="#events" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Events</a>
              <a href="#hackathon" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hackathon</a>
              <a href="#schedule" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Schedule</a>
              <a href="#sponsors" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Sponsors</a>
              <a href="#hospitality" className="text-white text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-yellow-300">Hospitality</a>
            </nav>
            <img src="/ssn-logo.svg" alt="ssn" className="h-40 w-40" />
          </div>
        </div>
        <div id="home-content" className="relative flex flex-col items-start ml-32 mt-24 z-10 text-white font-bold">
          <span className="font-dosis font-extralight text-4xl block">OUR THEME THIS YEAR</span>
          <span className="font-dosis font-extralight text-4xl block mt-2">UN - SDG Goals</span>
          <span className="font-dosis font-bold text-4xl block mt-6">About Invente</span>
          <pre className="font-dosis font-normal text-lg whitespace-pre-line mt-4">
            {`Looking for fun? You've come to the right place!
Since 2016, Invente has been our flagship techfest,
catered to challenge the spirits and intellects of students
nationwide.`}
          </pre>
          <button className="text-black font-libre font-extralight w-44 bg-white rounded-xl p-5 ml-6 mt-6 shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            Get Passes
          </button>

          <pre className="font-libre font-extralight text-normal whitespace-pre-line mt-4 absolute right-20 bottom-0 m-6">
            {`Grab your registrations now,
we look forward to seeing you here soon!!`}
          </pre>
        </div>
        
      </div>
      <img src="/Invente-Logo.png" alt="Invente Logo" className="absolute inset-0 mx-auto my-auto max-w-xs " />
      <img src="/SDN-Goals.png" alt="SDN Goals" className="absolute right-20 bottom-38 m-6 w-96" />
    </div>
  );
}

export default Home;
