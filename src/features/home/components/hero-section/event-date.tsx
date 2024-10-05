"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EventDate = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Nov 30, 2024 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div className="mb-8 md:mb-0 flex flex-col md:items-start items-center">
        <p className="text-2xl font-bold text-blue-300 md:mb-2">30 November 2024</p>
        <p className="text-lg text-blue-200">Time and venue TBA</p>
      </div>
      <div className="flex space-x-2 text-center">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-300">{value}</span>
            <p className="text-sm text-blue-200">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDate;
