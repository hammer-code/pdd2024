"use client";

import { useState } from "react";
import axios from "axios";
import { div } from "framer-motion/client";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventSubscriptionOld = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/newsletters/subscribe`, {
        email: email,
      });

      // this action clears the input value and is triggered when the email is sent successfully
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
      }, 2500);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primaryBlack-800 bg-opacity-[0.4] my-10">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full items-center md:items-end">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <p className="text-2xl md:mb-4 mb-2 text-blue-200 font-semibold">What to expect:</p>
            <ul className="md:text-base text-sm list-none space-y-2 text-blue-100">
              <li>🎤 Inspiring keynote speakers</li>
              <li>💡 Cutting-edge AI demonstrations</li>
              <li>🤝 Networking opportunities</li>
              <li>🚀 Insights into the future of IT</li>
            </ul>
          </div>
          <form className="md:w-1/2" onSubmit={handleSubscription}>
            <p className="text-lg mb-4 text-blue-200 font-semibold">Stay updated:</p>
            <div className="flex items-center">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-blue-800 bg-opacity-50 rounded-l-lg w-full text-white p-3 leading-tight focus:outline-none focus:bg-opacity-75 transition-all duration-200"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button
                disabled={isLoading || isSuccess}
                className={`${isLoading || isSuccess ? "cursor-not-allowed" : "cursor-pointer"}  ${
                  isSuccess ? "bg-sky-600" : "bg-blue-600 hover:bg-blue-700 active:bg-blue-500"
                } flex-shrink-0 text-sm text-white py-3 px-4 rounded-r-lg transition duration-300`}
              >
                {isLoading ? "Loading..." : isSuccess ? "Email Sent!" : "Notify Me"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventSubscriptionOld;
