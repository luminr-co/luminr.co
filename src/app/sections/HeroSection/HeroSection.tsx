import { CustomerSection } from "./components/CustomerSection";
import { MeetingSection } from "./components/MeetingSection";

const HeroSection = () => {
  return (
    <div className="mx-auto w-11/12 my-6 text-beige">
      <h1 className="text-center text-4xl md:text-[5.2rem] mx-auto p-3 capitalize leading-normal font-bold max-w-[67rem]">
        Illuminating your vision with utmost delight and care
      </h1>
      {/* <CustomerSection /> */}
      <MeetingSection />
    </div>
  );
};

export default HeroSection;
