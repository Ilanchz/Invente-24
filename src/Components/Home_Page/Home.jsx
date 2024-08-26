import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Footer';
import TimelineSection from '../TimelineSection';
import CountdownTimer from '../CountdownTimer';
import Navelement from '../Navelement';
import { ToastContainer, toast } from 'react-toastify';
import './home.css'; /*https://www.magicpattern.design/tools/starry-sky-generator*/
import MovingGalleries from './MovingGalleries'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const eventsRef = useRef(null);

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          toast.info('Events are within the departments listed below', {
            autoClose: 5000, // Auto close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // Unobserve once the notification has been shown
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 } // Set a lower threshold for testing
    );

    const currentRef = eventsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className='w-screen flex flex-col items-center p-3 overflow-x-hidden bg-cover bg-center bg-starry-sky'>
      <div className="relative w-screen sm:h-large flex flex-col items-center justify-center overflow-hidden rounded-xl px-2">
        <div className="w-full sm:h-full h-screen bg-deep-charcoal-gradient background-transition flex flex-col backdrop-blur-3xl rounded-extra-large overflow-x-hidden" id="home">
          <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <div id="home-content" className="flex justify-center items-center mb-10 pb-10 md:items-start px-4 md:px-16 mt-6 md:mt-12 text-white font-bold flex-col lg:flex-row">
            <div className='flex lg:w-1/3 sm:h-full lg:hidden items-center justify-center -z-10 hover:animate-pulse'>
              <img src="/invente24_orange.png" alt="Invente Logo" className='w-1/2 lg:w-full' />
            </div>
            <div id="home-text" className='flex flex-col h-full items-center justify-center w-full lg:w-1/3'>
              <span className="font-dosis font-extralight text-xl md:text-2xl block text-center md:text-left">OUR THEME THIS YEAR</span>
              <span className="font-libre font-bold text-4xl md:text-6xl block mt-2 text-center md:text-left text-green-200">Eco-volution</span>
              <pre className="font-dosis font-normal text-base md:text-lg whitespace-pre-line mt-4 text-center md:text-left">Evolving Technology for a Sustainable Future</pre>
              <pre className="font-dosis font-extrabold md:text-xl whitespace-pre-line mt-4 text-center md:text-left">
                <span className='text-red-400'>27th</span> & <span className='text-red-400'>28th</span> September 2024
              </pre>

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

            </div>
            <div className='lg:flex hidden sm:w-1/3 sm:h-full items-center justify-center -z-10 hover:animate-pulse'>
              <img src="/invente24_orange.png" alt="Invente Logo" />
            </div>
            <div className='hidden sm:w-1/3 sm:h-full justify-center items-center lg:flex'>
              <img src="/leaf.svg" alt="Technology animation" className="w-2/3 rounded-full bg-cover" />
            </div>
          </div>
          
        </div>

        {/* Overlay Menu for Small Screens */}
        
      </div>

      <section>
        <CountdownTimer />
      </section>

      <section className='flex items-center flex-col m-3' id="events" >
        <div className='font-dosis text-2xl sm:text-4xl text-white p-10' ref={eventsRef}>Welcome to the events page</div>
        <img src="Earth-spin.gif" className='w-64 h-64 rounded-full mt-6' alt="Earth Spin Animation" />
        <TimelineSection />
        {/* <img src="SDG/SDG-Title.webp" alt="title" className='w-64 rounded-full'/> */}
      </section>

      <section>
        <MovingGalleries />
      </section>

      {/* New Sections Below */}
      <section>
        <Footer />
      </section>  

      <ToastContainer />
    </div>
  );
}

export default Home;
