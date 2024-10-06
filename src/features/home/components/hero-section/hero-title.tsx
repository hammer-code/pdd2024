const HeroTitle = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between md:items-start items-center md:gap-0 gap-4">
      <div className="flex flex-col justify-center items-center md:gap-2 gap-4 w-full">
        <h1 className="gradient-text md:text-4xl md:text-left text-center text-3xl md:h-14 inline-block font-bold">
          Palu Developer Day 2024
        </h1>
        <h2 className="text-lg md:text-5xl md:text-left text-center font-semibold md:mb-8 mb-6 text-blue-100 md:leading-[70px]">
          Driving Technological Advancements:
          <br />
          AI-Powered IT from Concept to Reality
        </h2>
      </div>
    </div>
  );
};

export default HeroTitle;
