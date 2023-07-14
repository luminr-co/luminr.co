import { ContactusButton } from "@/app/components/ContactUs-Button";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  const imagesArray: { logo: string; website: string }[] = [
    {
      logo: "/brands/writtenwater.svg",
      website: "https://writtenwater.com",
    },
    {
      logo: "/brands/agile-inverse.svg",
      website: "https://agile.com.np/",
    },
    {
      logo: "/brands/codefornepal.png",
      website: "https://codefornepal.org/",
    },
    {
      logo: "/brands/deerhack.webp",
      website: "https://deerhack.deerwalk.edu.np/",
    },
  ];
  const mappedImages = imagesArray.map((image, i: number) => (
    <a key={i} href={image.website} target="_blank">
      <Image
        src={image.logo}
        height={100}
        width={100}
        alt="brand-logo"
        className="!aspect-[3/2] object-contain !h-auto w-32 md:w-40"
        unoptimized
      />
    </a>
  ));
  return (
    <div className="trusted-by text-beige w-11/12 mx-auto  my-24">
      <h1 className="font-mons text-[2rem] md:text-[2.5rem] font-bold capitalize py-6 text-center">
        Trusted By
      </h1>
      <div className="brand-logos flex flex-wrap justify-center items-center gap-[3.75rem]">
        {mappedImages}
      </div>
      <div className="mt-24 md:mt-52 text-beige">
        <h1 className="font-mons font-bold text-4xl text-center md:leading-[95.5%]">
          Ready to Start a Project?
        </h1>
        <p className="font-kanit text-[2rem] text-center mt-7 leading-[95.5%]">
          Book a meeting with our team right away
        </p>
        <div className="mt-20 flex flex-col items-center gap-16 justify-center">
          <Image
            src="/handshake.svg"
            alt="handshake"
            height={150}
            width={150}
            className="w-44 md:w-[22rem]"
          />
          <ContactusButton />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
