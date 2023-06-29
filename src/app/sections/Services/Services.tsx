import { Card } from "@/app/components/Card";
import React from "react";

const Services = () => {
  return (
    <div className="w-11/12 mx-auto my-3 text-beige ">
      <h2 className="font-mons text-[2rem] md:text-[4rem] font-bold text-center  md:text-start">
        We help you build your dream product
      </h2>
      <div className="grid md:grid-cols-3 align-middle md:place-content-center my-5 py-5 gap-6">
        <Card height={"17.5"} width={"27.25"}>
          <h4 className=" text-base font-bold  ">Website Design</h4>
          <p className="text-lg font-light">
            Create fascinating websites that engage your audience and provide
            seamless user experiences packed with personality and charm,
            elevating it above just another online presence.
          </p>
          <p className="bottom-text text-lg ">
            Make a lasting impression with a brand that glows and stands out.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Services;
