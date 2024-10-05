import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-72 h-72 border border-slate-700 relative">
      <Image
        src="/assets/images/person.png"
        alt="pdd-2024-logo"
        width={200}
        height={200}
        className="md:w-full md:h-full"
      />
    </div>
  );
};

export default Card;
