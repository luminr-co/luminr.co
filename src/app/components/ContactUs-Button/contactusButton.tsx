import Link from "next/link";
import React from "react";

const contactusButton = () => {
  return (
    <Link
      href={"/contact-us"}
      className="bg-transparent hover:bg-beige text-beige font-semibold hover:text-black py-1 px-4 md:py-2 md:px-8 border border-beige hover:border-transparent rounded transition ease-out delay-75"
    >
      Book a Meeting
    </Link>
  );
};

export default contactusButton;
