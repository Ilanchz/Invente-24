// src/CountdownTimer.js
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Confetti from 'react-confetti';

const CountdownTimer = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(false);

  const targetDate = new Date('2024-09-27T21:02:40');

  useEffect(() => {
    if (showConfetti && !confettiBurst) {
      setConfettiBurst(true);
    }
  }, [showConfetti, confettiBurst]);

  return (
    <div className="relative flex flex-col items-center justify-center mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
      {confettiBurst && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200} // Adjust the number of pieces for the confetti burst
          recycle={false} // Prevent repeating confetti
        />
      )}
      <Countdown
        date={targetDate}
        onComplete={() => {
          setShowConfetti(true); // Trigger confetti when the countdown is complete
        }}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <div className="text-center text-white">
                <div className="text-4xl font-extralight mb-4 animate-pulse font-raleway">The Time Has Arrived!</div>
                <div className="text-2xl font-semibold font-shadows">Events have started...</div>
              </div>
            );
          }

          return (
            <div className="flex space-x-4 text-center text-white">
              <TimeUnit label="Days" value={days} />
              <TimeUnit label="Hours" value={hours} />
              <TimeUnit label="Minutes" value={minutes} />
              <TimeUnit label="Seconds" value={seconds} />
            </div>
          );
        }}
      />
    </div>
  );
};

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center p-4 bg-black bg-opacity-50 rounded-lg shadow-xl">
    <div className="text-6xl font-extrabold mb-2 animate-flip">{String(value).padStart(2, '0')}</div>
    <div className="text-lg font-semibold">{label}</div>
  </div>
);

export default CountdownTimer;
