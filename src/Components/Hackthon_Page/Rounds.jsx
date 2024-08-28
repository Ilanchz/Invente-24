import React from 'react';

const Rounds = ({ round_name, round_desc }) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-auto gap-8 bg-gray-900 border border-gray-700 rounded-lg py-10 px-6 sm:px-10 w-9/10 sm:w-5/6 drop-shadow-[0_0_10px_rgba(0,0,255,0.9)] transition-shadow duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,255,1)]">
      <div className="text-orange-500 text-center text-2xl font-semibold self-center font-dosis text-shadow-[0_0_5px_rgba(255,255,255,1),0_0_10px_rgba(255,255,255,1)] hover:text-shadow-[0_0_10px_rgba(255,255,255,1),0_0_15px_rgba(255,255,255,1)]">
        {round_name}
      </div>
      <div>
        {round_desc.split('\n').map((line, index) => (
          <p key={index} className="text-left text-white text-lg leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rounds;
