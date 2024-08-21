import React from 'react';

const Contact = ({department, name, number, insta}) => {
  return (
    <div className="p-4 bg-gray-500 bg-opacity-25 rounded-lg shadow-md">
        <center className='bg-blue-500 bg-opacity-40 rounded-lg py-2'>
            <h2 className="text-2xl font-bold text-gray-100 py-3 px-2">Department of {department}</h2>
        </center>
      
      <div className="mt-4">
        <center>
            <h3 className="font-semibold text-lime-200 text-xl">Contacts</h3>
            <ul className="mt-2 space-y-2">
                <li className="text-gray-100">{name}</li>
                <li className="text-gray-100">{number}</li>
                <li className="text-pink-400 bg-gray-900 rounded-lg py-4 text-lg">Instagram :{insta}</li>
            </ul>
        </center>
    
      </div>
    </div>
  );
};

export default Contact;