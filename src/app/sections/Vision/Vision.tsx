import Image from "next/image";
import React from "react";
import waterfall from "../../assets/images/waterfall.svg";

const Vision = () => {
  return (
    <div className="visions w-11/12 mx-auto text-beige">
      <h1 className="font-mons font-bold text-[4rem] leading-[normal] max-w-3xl">
        How we shape your vision into a reality
      </h1>
      <p className="font-kanit text-[2rem] font-normal leading-[120.5%] not-italic mt-9 max-w-5xl">
        At
        <span className="text-[#DB6332]"> luminr.co </span>
        we have a defined set of steps to help us align with your vision and
        deliver an outstanding product.
      </p>
      <div className="flex items-center mt-24">
        <Image src={waterfall} alt="waterfall" className="!w-full !h-auto" />
      </div>
    </div>
  );
};

export default Vision;
