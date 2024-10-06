"use client";

import axios from "axios";
import { useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Newsletter = () => {
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
        <div className="flex md:flex-row flex-col md:items-end items-start justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-sky-300">Newsletter</h1>
            <p className="text-sm">Stay tune and get in touch with our update on this event!</p>
          </div>
          <form className="md:w-1/2 w-full" onSubmit={handleSubscription}>
            <div className="flex items-center">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none bg-sky-800 bg-opacity-50 rounded-l-lg w-full text-white p-3 leading-tight focus:outline-none focus:bg-opacity-75 transition-all duration-200"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button
                disabled={isLoading || isSuccess}
                className={`${isLoading || isSuccess ? "cursor-not-allowed" : "cursor-pointer"}  ${
                  isSuccess ? "bg-sky-600" : "bg-sky-600 hover:bg-sky-700 active:bg-sky-500"
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

export default Newsletter;
