// src/TimelineSection.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const departments = [
  { name: 'Computer Science and Engineering', image: '/images/cse.jpg', path: '/department/cse' },
  { name: 'Information Technology', image: '/images/it.jpg', path: '/department/it' },
  { name: 'Electronics and Communication Engineering', image: '/images/ece.jpg', path: '/department/ece' },
  { name: 'Electrical and Electronics Engineering', image: '/images/eee.jpg', path: '/department/eee' },
  { name: 'Chemical Engineering', image: '/images/ce.jpg', path: '/department/ce' },
  { name: 'Biomedical Engineering', image: '/images/bme.jpg', path: '/department/bme' },
  { name: 'Civil Engineering', image: '/images/cv.jpg', path: '/department/cv' },
];

const TimelineSection = () => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="relative flex flex-col items-center py-8 gap-10 md:gap-20">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full top-0 border-4 border-gray-300 glow-animation" />
      {departments.map((department, index) => (
        <TimelineItem
          key={index}
          name={department.name}
          image={department.image}
          path={department.path}
          isLast={index === departments.length - 1} // To handle the last item
          onClick={handleItemClick}
          isOdd={index % 2 === 1} // Alternate sides
        />
      ))}
    </div>
  );
};

const TimelineItem = ({ name, image, path, isLast, onClick, isOdd }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-5 md:gap-x-40 w-full max-w-2xl px-6 transition-transform duration-500 ease-in-out ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
      } ${isOdd ? 'flex-row-reverse' : ''} ${!isLast ? 'pb-6' : ''}`}
      onClick={() => onClick(path)} // Navigate to department on click
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-28 h-28 sm:w-40 sm:h-40 bg-cover bg-center rounded-full border-2 border-gray-200 flex-shrink-0 hover:scale-120 transition-transform duration-300"
      />
      <div className={`absolute w-1 bg-gray-300 h-6/12 ${isOdd ? 'left-[calc(50%+1px)]' : 'left-1/2'} transform -translate-x-1/2 -top-1/2`} />
      <div className={`relative ml-6 p-8 bg-white shadow-lg rounded-lg border border-gray-200 flex-1 hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer ${isOdd ? 'ml-0 mr-6' : ''}`}>
        <h3 className="text-xl md:text-2xl font-semibold hover:scale-105 transition-transform duration-300 text-gray-800 font-dosis">{name}</h3>
      </div>
    </div>
  );
};

export default TimelineSection;
