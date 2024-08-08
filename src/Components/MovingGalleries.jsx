import React from 'react';

const MovingGalleries = () => {
  const images = [
    "/Goals/E-WEB-Goal-01.png",
    "/Goals/E-WEB-Goal-02.png",
    "/Goals/E-WEB-Goal-03.png",
    "/Goals/E-WEB-Goal-04.png",
    "/Goals/E-WEB-Goal-05.png",
    "/Goals/E-WEB-Goal-06.png",
    "/Goals/E-WEB-Goal-07.png",
    "/Goals/E-WEB-Goal-08.png",
    "/Goals/E-WEB-Goal-09.png",
    "/Goals/E-WEB-Goal-10.png",
    "/Goals/E-WEB-Goal-11.png",
    "/Goals/E-WEB-Goal-12.png",
    "/Goals/E-WEB-Goal-13.png",
    "/Goals/E-WEB-Goal-14.png",
    "/Goals/E-WEB-Goal-15.png",
    "/Goals/E-WEB-Goal-16.png",
    "/Goals/E-WEB-Goal-17.png"
  ];

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-black space-y-16">
      <img src="SDG/SDG-Title.webp" alt="title" className='w-64 rounded-full'/>
      {/* Top Gallery */}
      <div className="w-full overflow-hidden relative">
        <div className="flex animate-scroll-left space-x-4">
          {images.concat(images).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery 1 - ${index}`}
              className="w-36 h-36 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingGalleries;
