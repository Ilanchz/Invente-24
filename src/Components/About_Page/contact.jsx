import React from 'react';

const Contact = ({department,dept, name, number, insta}) => {
  return (
    <div className=" bg-gray-950 rounded-lg shadow-md w-full md:w-2/5">
        <center className='bg-blue-500 bg-opacity-40 rounded-lg py-2'>
            <h2 className="text-xl font-bold text-gray-100 py-3 px-2 font-raleway">Department of {department}</h2>
        </center>

      
      
      <div className="p-5">
      <div className='p-5 bg-transparent border-blue-500 border-1 rounded-lg w-fit text-blue-600 relative top-2 hover:bg-blue-400 hover:text-black'>{dept}</div>
        <center>
            <h3 className="font-semibold text-violet-200 text-2xl font-raleway">Department President</h3>
            <ul className="mt-2 space-y-2">
                <li className="text-gray-100 font-raleway font-bold text-2xl">{name}</li>
                <li className="text-gray-100">{number}</li>
                <li className="text-pink-400 bg-gray-900 rounded-lg py-4 text-lg">Instagram :{insta}</li>
            </ul>
        </center>
    
      </div>
    </div>
  );
};

export default Contact;