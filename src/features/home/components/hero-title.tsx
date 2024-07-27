import React from "react";

const HeroTitle = () => {
  return (
    <div>
      <div className="flex flex-col md:items-start items-center md:gap-0 gap-4">
        <h1 className="gradient-text md:text-5xl md:text-left text-center text-3xl md:h-14 inline-block font-bold">
          Coming Soon
        </h1>
        <h2 className="text-xl md:text-3xl md:text-left text-center font-semibold mb-8 text-blue-100">
          Driving Technological Advancements:
          <br />
          AI-Powered IT from Concept to Reality
        </h2>
      </div>
    </div>
  );
};

export default HeroTitle;
