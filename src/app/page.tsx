"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
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
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
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
    <div className="gradient-bg text-white font-sans min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="glass-effect p-8 md:p-12 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
            Coming Soon
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-8 text-blue-100">
            Driving Technological Advancements:
            <br />
            AI-Powered IT from Concept to Reality
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <p className="text-2xl font-bold text-blue-300 mb-2">
                30 November 2024
              </p>
              <p className="text-lg text-blue-200">Time and venue TBA</p>
            </div>
            <div className="flex space-x-2 text-center">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-blue-300">
                    {value}
                  </span>
                  <p className="text-sm text-blue-200">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12 flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <p className="text-lg mb-4 text-blue-200 font-semibold">
                What to expect:
              </p>
              <ul className="list-none space-y-2 text-blue-100">
                <li>🎤 Inspiring keynote speakers</li>
                <li>💡 Cutting-edge AI demonstrations</li>
                <li>🤝 Networking opportunities</li>
                <li>🚀 Insights into the future of IT</li>
              </ul>
            </div>
            <form className="md:w-1/2">
              <p className="text-lg mb-4 text-blue-200 font-semibold">
                Stay updated:
              </p>
              <div className="flex items-center">
                <input
                  className="appearance-none bg-blue-800 bg-opacity-50 rounded-l-lg w-full text-white p-3 leading-tight focus:outline-none focus:bg-opacity-75"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
                <button
                  className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-sm text-white py-3 px-4 rounded-r-lg transition duration-300"
                  type="button"
                >
                  Notify Me
                </button>
              </div>
            </form>
          </div>

          <div className="text-center">
            <p className="text-sm text-blue-200 mb-4">
              Organized by Hammercode Community
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
