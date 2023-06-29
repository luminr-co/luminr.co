import React from "react";

type Props = {
  top: number;
  isOdd: boolean;
};

const Ellipse = ({ top, isOdd }: Props) => {
  return (
    <div
      className=" w-60 h-60 md:w-[27rem] md:h-[27rem]"
      style={{
        position: "absolute",
        top: `${top}px`,
        [isOdd ? "right" : "left"]: "0",
        // width: "27rem",
        // height: "27rem",
        borderRadius: "725px",
        backgroundColor: "#DB6332",
        filter: "blur(350px)",
        opacity: "0.800000011920929",
        zIndex: "-1",
      }}
    />
  );
};

export default Ellipse;
