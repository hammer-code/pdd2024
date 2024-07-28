import Image from "next/image";

import hmcLogo from "../../../../public/assets/logos/ic_hmc.svg";
import pddLogo from "../../../../public/assets/logos/ic_pdd24.svg";

const HeroTitle = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between md:items-start items-center md:gap-0 gap-4">
      <div className="flex flex-col md:items-start items-center md:gap-0 gap-4">
        <h1 className="gradient-text md:text-5xl md:text-left text-center text-3xl md:h-14 inline-block font-bold">
          Coming Soon
        </h1>
        {/* <h2 className="gradient-text text-xl md:text-3xl md:text-left text-center font-semibold mb-8 text-blue-100 inline-block">PDD 2024</h2> */}
        <h2 className="text-lg md:text-3xl md:text-left text-center font-semibold mb-8 text-blue-100">
          Driving Technological Advancements:
          <br />
          AI-Powered IT from Concept to Reality
        </h2>
      </div>

      <div className="flex items-center md:gap-8 gap-4">
        <Image src={hmcLogo} alt="hmc-logo" width={42} height={42} />
        <Image src={pddLogo} alt="pdd-2024-logo" width={42} height={42} />
      </div>
    </div>
  );
};

export default HeroTitle;
