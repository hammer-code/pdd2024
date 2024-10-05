import { SpeakerList } from "@/types";
import React, { FC } from "react";

const Card: FC<{ data: SpeakerList }> = ({ data }) => {
  return (
    <div className={`relative w-60 h-60 border border-slate-700 bg-cover bg-center rounded-sm`} style={{ backgroundImage: `url(${data.img})` }}>
      <div className="w-full p-2 absolute bottom-0">
        <div className="bg-white p-1">
          <p className="text-primaryBlack-900 font-semibold">{data.name}</p>
          <p className="text-primaryBlack-900 text-sm">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
