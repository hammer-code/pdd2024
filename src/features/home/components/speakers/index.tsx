import { speakerLists } from "@/constants";
import Card from "./card";
import TitleSection from "./title-section";

const Speakers = () => {
  return (
    <div id="speakers" className="max-w-6xl mx-auto px-5 py-24">
      <div className="space-y-6">
        <TitleSection />
        <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-14">
          {
            speakerLists.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Speakers;
