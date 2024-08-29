import React from "react";
import Rounds from "./Rounds";

function Modal({ isOpen, onClose, hackathon }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="overflow-y-auto max-h-screen mt-12 bg-gray-900 bg-opacity-80 w-full max-w-3xl mx-4 p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-100">
            {hackathon.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-600 text-lg"
          >
            ✕
          </button>
        </div>
        {/* <img src={hackathon.image} alt={hackathon.title} className="w-full h-40 object-cover rounded-md mb-4" /> */}
        <div className="bg-blue-600 mt-10 mb-8 bg-opacity-60 rounded-xl p-4 mb-4">
          <div className="font-dosis flex flex-wrap justify-around text-white flex-col sm:flex-row gap-4">
            <div className="text-center">
              <p className="text-xl">
                <b>₹{hackathon.prizeWinner}</b>
              </p>
              <p>Winner</p>
            </div>
            <div className="text-center">
              <p className="text-xl">
                <b>₹{hackathon.prizeRunner}</b>
              </p>
              <p>Runner</p>
            </div>
            <div className="text-center">
              <p className="text-xl">
                <b>₹{hackathon.prizeSecondRunner}</b>
              </p>
              <p>2nd Runner</p>
            </div>
            <div className="text-center">
              <p className="text-xl">
                <b>{hackathon.date}</b>
              </p>
              <p>Date</p>
            </div>
            <div className="text-center">
              <p className="text-xl">
                <b>{hackathon.location}</b>
              </p>
              <p>Location</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="font-dosis text-gray-100 whitespace-pre-wrap leading-relaxed text-lg">
            {hackathon.description}
          </p>
          <div className="mt-12 flex flex-col w-full h-full justify-center items-center gap-10">
            {hackathon["rounds"].map((round) => (
              <Rounds
                key={round["round_name"]}
                round_name={round["round_name"]}
                round_desc={round["round_desc"]}
              />
            ))}
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            {hackathon.coordinators && (
              <div className="mt-10 w-full flex flex-col items-center gap-4">
                <h3 className="text-2xl text-white font-bold mb-2 font-dosis">
                  Coordinators
                </h3>
                <div className="flex gap-2 flex-col md:flex-row">
                  {hackathon.coordinators.map((name) => (
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
          {/* <p className="text-gray-100 mt-2 mb-10">
            <strong>Date:</strong> {hackathon.date}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
