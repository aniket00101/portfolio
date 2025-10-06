import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return {
      time: `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
      ampm: ampm,
    };
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const { time: digitalTime, ampm } = formatTime(time);
  const dateString = formatDate(time);

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 sm:px-6 md:px-8 py-3 sm:py-5 md:py-6">
      <div className="border-2 border-orange rounded-2xl backdrop-blur-xl bg-black/30 shadow-2xl w-full max-w-md mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        <div className="mb-4 sm:mb-6 text-center border-b-2 border-orange/90 pb-3 sm:pb-4">
          <h3 className="text-cyan text-xs sm:text-sm font-semibold mb-2">TODAY'S DATE</h3>
          <p className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words text-center px-2">{dateString}</p>
        </div>
        <div className="text-center">
          <h3 className="text-cyan text-xs sm:text-sm font-semibold mb-2">CURRENT TIME</h3>
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-orange font-mono tabular-nums">{digitalTime}</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan">{ampm}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
