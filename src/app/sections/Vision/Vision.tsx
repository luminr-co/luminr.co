import Image from "next/image";
import React from "react";
import waterfall from "../../assets/images/waterfall.svg";
import WaterFall from "@/app/assets/images/WaterFall";

const Vision = () => {
  return (
    <div className="visions w-11/12 mx-auto text-beige my-6 md:my-32">
      <h2 className="font-mons font-bold text-[2rem] md:text-[4rem] leading-[normal] max-w-3xl text-center md:text-start">
        How We Shape Your Vision Into A Reality
      </h2>
      <p className="font-kanit text-lg md:text-[2rem] font-normal leading-[120.5%] not-italic mt-9 max-w-5xl">
        At
        <span className="text-[#DB6332]"> luminr.co </span>
        we have a defined set of steps to help us align with your vision and
        deliver an outstanding product.
      </p>
      <div className="flex items-center mt-24">
        <WaterFall/>
      </div>
    </div>
  );
};

export default Vision;
