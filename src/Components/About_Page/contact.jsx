import React, { useState } from 'react';

const Contact = ({ department, name, number, insta, image }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy only the phone number
    navigator.clipboard.writeText(number)
      .then(() => {
        setCopied(true);
        // Reset copied state after a few seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="bg-gray-950 rounded-lg shadow-md w-full md:w-2/5">
      <center className='bg-blue-500 bg-opacity-40 rounded-lg py-2'>
        <h2 className="text-xl font-bold text-gray-100 py-3 px-2 font-raleway">
          Department of {department}
        </h2>
      </center>

      <div className="p-5">
        <center>
          {/* Profile Image */}
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          <ul className="mt-2 space-y-2">
            <li className="text-gray-100 font-raleway font-bold text-2xl">{name}</li>
            <li className="text-gray-100 flex items-center justify-center">
              <span className='self-center'>{number}</span>
              <button
                onClick={handleCopy}
                className="ml-2 p-1 rounded-full hover:bg-gray-300 text-white flex items-center justify-center"
                aria-label="Copy phone number"
              >
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {copied && <span className="ml-2 text-green-400">Copied!</span>}
            </li>
            <li className="text-pink-400 bg-gray-900 rounded-lg py-4 text-lg">
              Instagram: {insta}
            </li>
          </ul>
        </center>
      </div>
    </div>
  );
};

export default Contact;
