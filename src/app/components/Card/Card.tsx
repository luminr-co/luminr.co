import React from "react";

type Props = {
  className?: string;

  children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
  return (
    <div
      className={`rounded-3xl bg-beige font-kanit text-black flex flex-col gap-3  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
