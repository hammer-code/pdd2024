const RundownList = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "08:00 - 09:00",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "09:00 - 10:00",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    timeline: "10:00 - 11:00",
  },
];

const Rundown = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-24">
      <div className="flex flex-col md:flex-row gap-12">
        <h1 className="text-3xl font-semibold text-sky-300 text-center md:text-left">Event Agenda</h1>
        <div className="flex flex-col gap-4 flex-1 sm:min-w-[30rem]">
          {RundownList.map((value, index) => (
            <div key={index} className="bg-primaryBlack-800 space-y-4 p-4">
              <h2 className="font-semibold">{value.title}</h2>
              <p className="text-sm">{value?.description}</p>
              <div className="text-sm">{value.timeline}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rundown;
