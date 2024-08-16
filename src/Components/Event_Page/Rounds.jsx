import React from 'react';

const Rounds = ({ round_name, round_desc }) => {
  return (
    <div className="flex flex-col justify-start items-start h-auto p-4 gap-4 bg-gray-900 border border-gray-700 rounded-lg">
      <div className="text-left text-xl font-semibold self-center">{round_name}</div>
      <div className="text-left text-base">{round_desc}</div>
    </div>
  );
};

export default Rounds;
