import React from "react";

const EventSubscription = () => {
  return (
    <div className="mb-12 flex flex-col md:flex-row justify-between items-start">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <p className="text-lg md:mb-4 mb-2 text-blue-200 font-semibold">What to expect:</p>
        <ul className="md:text-base text-sm list-none space-y-2 text-blue-100">
          <li>🎤 Inspiring keynote speakers</li>
          <li>💡 Cutting-edge AI demonstrations</li>
          <li>🤝 Networking opportunities</li>
          <li>🚀 Insights into the future of IT</li>
        </ul>
      </div>
      <form className="md:w-1/2">
        <p className="text-lg mb-4 text-blue-200 font-semibold">Stay updated:</p>
        <div className="flex items-center">
          <input
            className="appearance-none bg-blue-800 bg-opacity-50 rounded-l-lg w-full text-white p-3 leading-tight focus:outline-none focus:bg-opacity-75 transition-all duration-200"
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 active:bg-blue-500 text-sm text-white py-3 px-4 rounded-r-lg transition duration-300"
            type="button"
          >
            Notify Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventSubscription;
