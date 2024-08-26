import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import Confetti from 'react-confetti';

const CountdownTimer = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(false);

  const targetDate = new Date('2024-07-27T00:00:00'); // Adjust the timer to September 27 00:00:00

  useEffect(() => {
    if (showConfetti && !confettiBurst) {
      setConfettiBurst(true);
    }
  }, [showConfetti, confettiBurst]);

  return (
    <div>
    {confettiBurst && (
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={1000} // Adjust the number of pieces for the confetti burst
        recycle={false} // Prevent repeating confetti
      />
    )}
    <div className="relative flex flex-col items-center justify-center mt-12 p-4 sm:p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <Countdown
        date={targetDate}
        onComplete={() => {
          setShowConfetti(true); // Trigger confetti when the countdown is complete
        }}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <div className="text-center text-white w-full px-4 sm:px-0">
                <div className="text-3xl sm:text-4xl font-extralight mb-2 sm:mb-4 animate-pulse font-raleway">
                  The Time Has Arrived!
                </div>
                <div className="text-xl sm:text-2xl font-semibold font-shadows">
                  Events have started...
                </div>
              </div>
            );
          }

          return (
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-center text-white">
              <TimeUnit label="Days" value={days} />
              <TimeUnit label="Hours" value={hours} />
              <TimeUnit label="Minutes" value={minutes} />
              <TimeUnit label="Seconds" value={seconds} />
            </div>
          );
        }}
      />
    </div>
    </div>
  );
};

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center p-2 sm:p-4 bg-black bg-opacity-50 rounded-lg shadow-xl w-16 sm:w-24">
    <div className="text-4xl sm:text-6xl font-extrabold mb-1 animate-flip">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-sm sm:text-lg font-semibold">{label}</div>
  </div>
);

export default CountdownTimer;
