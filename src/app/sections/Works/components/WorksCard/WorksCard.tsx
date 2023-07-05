import { Card } from "@/app/components/Card";
import React from "react";

type Props = {
  title: string;
  description: string;
};

const WorksCard = ({ title, description }: Props) => {
  return (
    <div>
      <Card className="max-w-[94.5rem] h-[25rem]">Image here</Card>
      <h1 className="project-title mt-8 capitalize font-bold text-beige text-[2.5rem] leading-[normal] font-kanit  ">
        {title}
      </h1>
      <p className="text-beige font-kanit font-normal text-xl leading-[normal]  mt-[0.31rem] max-w-xl">
        {description}
      </p>
    </div>
  );
};

export default WorksCard;
