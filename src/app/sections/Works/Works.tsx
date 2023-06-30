import { Card } from "@/app/components/Card";
import React from "react";
import { WorksCard } from "./components/WorksCard";

const Works = () => {
  const projectDetails = [
    {
      title: "Project Title",
      description:
        "This is the project description. Very nice project wow indeed. Such nice. Beautiful work. This is the project description. Very nice project wow indeed. Such nice. Beautiful work.",
    },
    {
      title: "Project Title",
      description:
        "This is the project description. Very nice project wow indeed. Such nice. Beautiful work. This is the project description. Very nice project wow indeed. Such nice. Beautiful work.",
    },
    {
      title: "Project Title",
      description:
        "This is the project description. Very nice project wow indeed. Such nice. Beautiful work. This is the project description. Very nice project wow indeed. Such nice. Beautiful work.",
    },
    {
      title: "Project Title",
      description:
        "This is the project description. Very nice project wow indeed. Such nice. Beautiful work. This is the project description. Very nice project wow indeed. Such nice. Beautiful work.",
    },
  ];

  const mappedCards = projectDetails.map((project, i) => (
    <WorksCard
      key={i}
      title={project.title}
      description={project.description}
    />
  ));

  return (
    <div className="works w-11/12 mx-auto mt-12">
      <h1 className="max-w-3xl text-beige text-[4rem] leading-[normal] font-mons font-bold capitalize">
        Some of Our Work
      </h1>
      <div className="grid grid-cols-2 gap-5 mt-20">{mappedCards}</div>
    </div>
  );
};

export default Works;
