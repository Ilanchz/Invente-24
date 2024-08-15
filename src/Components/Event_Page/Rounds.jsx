import React from 'react';

const Rounds = ({ round_name, round_desc }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-4">
      <div className="text-left text-xl">{round_name}</div>
      <div className="text-left mt-4">{round_desc}</div>
    </div>
  );
};

export default Rounds;
