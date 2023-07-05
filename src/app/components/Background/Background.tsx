import React from "react";
import { Ellipse } from "../Ellipse";

type Props = {
  noOfEllipses: number;
};

const Background = ({ noOfEllipses }: Props) => {
  const ellipses = [];

  for (let i = 0; i < noOfEllipses; i++) {
    const top = 30 + i * 1000;
    const isOdd = i % 2 === 0;
    ellipses.push(<Ellipse key={i} top={top} isOdd={isOdd} />);
  }
  return (
    <div className="ellipses-container absolute -z-10 w-full">{ellipses}</div>
  );
};

export default Background;
