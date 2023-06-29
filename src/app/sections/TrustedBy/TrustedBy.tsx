import { ContactusButton } from "@/app/components/ContactUs-Button";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  const imagesArray: string[] = [
    "/adidas.svg",
    "/apple.svg",
    "chanel.svg",
    "mcdonald.svg",
    "nike.svg",
    "vector.svg",
    "google.svg",
  ];
  const mappedImages = imagesArray.map((image: string, i: number) => (
    <Image
      key={i}
      src={image}
      width={20}
      height={20}
      alt="brand-logo"
      className="aspect-[3/2] object-contain w-1/2 md:w-[11%]"
    />
  ));
  return (
    <div className="trusted-by text-beige w-11/12 mx-auto my-24 ">
      <h1 className="font-mons text-[2.5rem] font-bold capitalize py-6 text-center">
        Trusted By
      </h1>
      <div className="brand-logos flex flex-wrap justify-center  gap-[3.75rem]">
        {mappedImages}
      </div>
      <div className="mt-52 text-beige">
        <h1 className="font-mons font-bold capitalize text-[2.5rem] text-center leading-[95.5%]">
          Ready to Start A Project
        </h1>
        <p className="font-kanit text-[2rem] text-center mt-7 leading-[95.5%]">
          Book a meeting with our team right away
        </p>
        <div className="mt-20 flex flex-col items-center gap-16 justify-center">
          <Image
            src="/handshake.svg"
            alt="handshake"
            width={350}
            height={250}
          />
          <ContactusButton />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
