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
    <div className="relative flex flex-col items-center py-8">
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
        />
      ))}
    </div>
  );
};

const TimelineItem = ({ name, image, path, isLast, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`hover:scale-110 relative flex gap-14 items-center w-full max-w-4xl px-6 transition-transform duration-500 ease-in-out transform ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
      } ${!isLast ? 'pb-6' : ''}`} // Add padding-bottom for spacing between items
      onClick={() => onClick(path)} // Navigate to department on click
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-40 h-40 bg-cover bg-center rounded-full border-2 border-gray-200 flex-shrink-0 hover:scale-120 transition-transform duration-300"
      />
      <div className="absolute w-1 bg-gray-300 h-6/12 left-1/2 transform -translate-x-1/2 -top-1/2" />
      <div className="relative ml-6 p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex-1 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <h3 className="w-40 font-semibold hover:scale-105 transition-transform duration-300 text-xl font-dosis">{name}</h3>
      </div>
    </div>
  );
};

export default TimelineSection;
