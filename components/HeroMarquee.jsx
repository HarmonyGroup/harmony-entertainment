import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";

const HeroMarquee = () => {
  return (
    <div>
      <Marquee
        autoFill={true}
        className="bg-white border-b-2 border-black space-x-10 py-10"
      >
        <div className="flex items-center gap-3 px-10">
          <h1 className="text-black text-xl font-semibold">
            Crafting Moments That Matter
          </h1>
        </div>
        <PiStarFourFill />
        <div className="flex items-center gap-3 px-10">
          <h1 className="text-black text-xl font-semibold">
            Elevating Every Experience
          </h1>
        </div>
        <PiStarFourFill />
        <div className="flex items-center gap-3 px-10">
          <h1 className="text-black text-xl font-semibold">
            Curating the Best of Culture
          </h1>
        </div>
        <PiStarFourFill />
        <div className="flex items-center gap-3 px-10">
          <h1 className="text-black text-xl font-semibold">
            Celebrating Diversity
          </h1>
        </div>
        <PiStarFourFill />
      </Marquee>
    </div>
  );
};

export default HeroMarquee;
