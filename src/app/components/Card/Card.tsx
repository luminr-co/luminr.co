import React from "react";

type Props = {
  width: string;
  height: string;
  children: React.ReactNode;
};

const Card = ({ width, height, children }: Props) => {
  return (
    <div
      className={`rounded-3xl p-3 bg-beige font-kanit text-black flex flex-col gap-3 ${height} ${width}`}
    >
      {children}
    </div>
  );
};

export default Card;
