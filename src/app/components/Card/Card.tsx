import React from "react";

type Props = {
  customClass?: string;

  children: React.ReactNode;
};

const Card = ({ customClass, children }: Props) => {
  return (
    <div
      className={`rounded-3xl p-3 bg-beige font-kanit text-black flex flex-col gap-3  ${customClass}`}
    >
      {children}
    </div>
  );
};

export default Card;
