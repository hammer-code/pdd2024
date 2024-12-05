import { rundownLists } from "@/constants";

const Rundown = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-24">
      <div className="flex flex-col gap-8 items-center">
        <h2 className="md:text-5xl text-3xl font-bold text-center">
          Event <span className="text-sky-500">Agenda</span>
        </h2>
        <div className="flex flex-col gap-4 max-w-[38rem] w-full">
          {rundownLists.map((value, index) => (
            <div key={index} className="bg-primaryBlack-800 space-y-4 p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg text-sky-500 font-semibold">
                  {value.title}
                </h2>{" "}
                <div className="text-md">{value.timeline}</div>
              </div>
              <div className="flex items-center justify-between gap-12">
                <p className="text-sm">{value?.description}</p>
                <p className="italic text-sm font-thin">Terlaksana</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rundown;
