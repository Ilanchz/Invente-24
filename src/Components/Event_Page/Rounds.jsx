import React from 'react';

const Rounds = ({ round_name, round_desc }) => {
  return (
    <div className="flex flex-col justify-center items-center h-auto gap-4 bg-gray-900 border border-gray-700 rounded-lg p-10 w-5/6">
      <div className="text-left text-xl self-center font-roboto font-light">{round_name}</div>
      {/* <div className="text-left text-lg font-dosis">{round_desc}</div> */}
      <div>
        {round_desc.split('\n').map((line, index) => (
          <p key={index} className="text-left font-roboto font-light text-lg">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Rounds;
