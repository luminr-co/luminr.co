import { Card } from "@/app/components/Card";
import React from "react";

const Services = () => {
  const serviesArray = [
    {
      title: "Website Development",
      description:
        "Create fascinating websites that engage your audience and provide seamless user experiences packed with personality and charm, elevating it above just another online presence.",
      description2:
        "Create user-friendly navigation and visually appealing designs that leave an impression.",
    },
    {
      title: "Mobile Development",
      description:
        "Create unique mobile apps that drive business growth by providing enjoyable user experiences and flawless functionality.",
      description2:
        "Prepare to be astounded as your app transforms into a powerful tool for your audience.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Increase your online exposure and organic traffic with intelligent search engine strategies that help you dominate search engine rankings and attract the audience to your digital doorstep.",
      description2:
        "Prepare for a journey of growth and discovery in the broad digital landscape.",
    },
  ];

  const servicesMapped = serviesArray.map((service, i) => (
    <Card key={i} className="max-w-lg p-9">
      <h4 className="text-lg md:text-2xl font-bold">{service.title}</h4>
      <p className="text-base md:text-lg font-light md:min-h-[10rem]">{service.description}</p>
      <p className="bottom-text text-base md:text-lg">{service.description2}</p>
    </Card>
  ));
  return (
    <div className="w-11/12 mx-auto my-6 md:my-32 text-beige">
      <h2 className="font-mons text-[2rem] md:text-[4rem] font-bold text-center  md:text-start max-w-3xl">
        We Help you Build your Dream Product
      </h2>
      <div className="grid lg:grid-cols-3 align-middle md:place-content-center my-5 py-5 gap-6 font-kanit place-content-center">
        {servicesMapped}
      </div>
    </div>
  );
};

export default Services;
