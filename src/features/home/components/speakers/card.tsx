import { SpeakerList } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

const Card: FC<{ data: SpeakerList }> = ({ data }) => {
  return (
    <div>
      <div className="w-full space-y-4 flex flex-col items-center p-2">
        <Image src={data.img} alt={data.name} width={240} height={240} className="w-40 h-40 object-cover rounded-full" />
        <div className="flex flex-col items-center gap-1">
          <p className="text-white md:text-xl font-semibold">{data.name}</p>
          <p className="text-white text-sm">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
