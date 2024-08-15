import React from 'react';

function Modal({ isOpen, onClose, hackathon }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="overflow-y-auto max-h-screen mt-12 bg-gray-900 bg-opacity-80 w-full max-w-3xl mx-4 p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-100">{hackathon.title}</h2>
          <button onClick={onClose} className="text-white hover:text-red-600 text-lg">✕</button>
        </div>
        <img src={hackathon.image} alt={hackathon.title} className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="bg-blue-600 bg-opacity-60 rounded-xl p-4 mb-4">
        <div className="flex justify-around text-white">
            <div className="text-center">
            <p className="text-xl"><b>₹{hackathon.prizeWinner}</b></p>
            <p>Winner</p>
            </div>
            <div className="text-center">
            <p className="text-xl"><b>₹{hackathon.prizeRunner}</b></p>
            <p>Runner</p>
            </div>
            <div className="text-center">
            <p className="text-xl"><b>{hackathon.date}</b></p>
            <p>Date</p>
            </div>
            <div className="text-center">
            <p className="text-xl"><b>{hackathon.location}</b></p>
            <p>Location</p>
            </div>
        </div>
        </div>
        <div className="mb-10">
          <p className="text-gray-100 whitespace-pre-wrap">{hackathon.description}</p>
          <p className="text-gray-100 mt-2 mb-10"><strong>Date:</strong> {hackathon.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
