import React from 'react';
import Rounds from './Rounds';

function Modal({ isOpen, onClose, workshop }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="overflow-y-auto max-h-screen mt-12 bg-gray-900 bg-opacity-80 w-full max-w-3xl mx-4 p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-100">{workshop.title}</h2>
          <button onClick={onClose} className="text-white hover:text-red-600 text-lg">✕</button>
        </div>
        <div className="mt-10 mb-8 bg-blue-600 bg-opacity-60 rounded-xl p-4 mb-4">
          <div className="font-dosis flex justify-around text-white flex-col sm:flex-row gap-4">
            <div className="text-center">
              <p className="text-xl"><b>₹{workshop.prizeWinner}</b></p>
              <p>Winner</p>
            </div>
            <div className="text-center">
              <p className="text-xl"><b>₹{workshop.prizeRunner}</b></p>
              <p>Runner</p>
            </div>
            <div className="text-center">
              <p className="text-xl"><b>{workshop.date}</b></p>
              <p>Date</p>
            </div>
            <div className="text-center">
              <p className="text-xl"><b>{workshop.location}</b></p>
              <p>Location</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-orange-500"><b>{workshop.domain}</b></p>
              <p>Domain</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="text-gray-100 whitespace-pre-wrap text-lg font-dosis">{workshop.description}</p>
          {/* <div className="mt-12 flex flex-col w-full h-full justify-center items-center gap-10">
            {workshop["rules"].map((round) => (
              <Rounds
                key={round["round_name"]}
                round_name={round["rule_name"]}
                round_desc={round["rule_desc"]}
              />
            ))}
          </div> */}
          <br/>
          <p className="text-red-400 whitespace-pre-wrap text-lg font-dosis">Venue: {workshop.location}</p>
          <p className="text-red-400 whitespace-pre-wrap text-lg font-dosis">Time: {workshop.time}</p>
          <p className="text-red-500 whitespace-pre-wrap text-lg font-dosis">Registration Fees: Rs. {workshop.fee}</p>
          <div className="text-center">
            <br/>
            <a href={workshop.link} className="text-blue-800 text-2xl whitespace-pre-wrap font-dosis hover:text-blue-200">Registration Link</a>
          </div>
          
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            {workshop.coordinators && (
              <div className="mt-10 w-full flex flex-col items-center gap-4">
                <h3 className="text-2xl text-white font-bold mb-2 font-dosis">
                  Coordinators
                </h3>
                <div className="flex gap-10 flex-wrap justify-center md:flex-row">
                  {workshop.coordinators.map((name) => (
                    <div
                      key={name["name"]}
                      className="text-white p-4 shadow-lg bg-black rounded-lg w-64 text-center"
                    >
                      <p className="text-md font-semibold">{name["name"]}</p>
                      <p className="text-md font-semibold">{name["ph"]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
