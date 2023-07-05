import { Card } from "@/app/components/Card";
import React from "react";

const Services = () => {
  const serviesArray = [
    {
      title: "Website Design",
      description:
        "Create fascinating websites that engage your audience and provide seamless user experiences packed with personality and charm, elevating it above just another online presence.",
      description2:
        "Create user-friendly navigation and visually appealing designs that leave an impression.",
    },
    {
      title: "Software Development",
      description:
        "Build scalable and customized software solutions tailored to your needs empowering your business to thrive and succeed with our extensive development expertise.",
      description2:
        "Watch as your ideas transform into powerful and innovative digital solutions.",
    },
    {
      title: "Mobile Development",
      description:
        "Create unique mobile apps that drive business growth by providing enjoyable user experiences and flawless functionality.",
      description2:
        "Prepare to be astounded as your app transforms into a powerful tool for your audience.",
    },
    {
      title: "Branding",
      description:
        "Create impactful brand identities that resonate with your audience, infusing them with life and personality and transforming it into a memorable experience.",
      description2:
        "Make a lasting impression with a brand that glows and stands out.",
    },
    {
      title: "Business Intelligence",
      description:
        "Leveraging the power of data to navigate complexity in the digital sphere, you gain insights and make data-driven decisions to stay ahead in a competitive market. ",
      description2:
        "Watch as your business gains a strategic edge through informed and planned decisions.",
    },
    {
      title: "SEO",
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
    <div className="w-11/12 mx-auto my-32 text-beige">
      <h2 className="font-mons text-[2rem] md:text-[4rem] font-bold text-center  md:text-start max-w-3xl">
        We help you build your dream product
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 align-middle md:place-content-center my-5 py-5 gap-6 font-kanit place-content-center">
        {servicesMapped}
      </div>
    </div>
  );
};

export default Services;
