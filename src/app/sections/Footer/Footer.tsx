import { Card } from "@/app/components/Card";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date();
  return (
    <div className="w-11/12 mx-auto mb-10 hidden md:block">
      <Card className="p-8">
        <Image
          src={"/footer-logo.svg"}
          alt="logo"
          height={50}
          width={80}
          unoptimized
          className="w-36"
        />
        <div className="text-center">
          <div className="flex justify-between items-center py-2 text-start">
            <div className="contact-us flex flex-col gap-4 font-kanit">
              <p className="text-2xl font-semibold ">Contact Us</p>
              <p className="text-xl"><a href="mailto:hello@luminr.co">hello@lumir.co</a></p>
              <p className="location text-xl ">
                Kaldhara <br /> Kathmandu,Nepal
              </p>
            </div>
            <div className="socials font-kanit flex flex-col gap-4">
              <p className="text-2xl font-semibold"> Socials</p>
              <a
                href="https://instagram.com/luminr.co"
                target="_blank"
                className="text-xl "
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/luminr-co/"
                target="_blank"
                className="text-xl "
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100093330643165&mibextid=ZbWKwL"
                target="_blank"
                className="text-xl "
              >
                Facebook
              </a>
            </div>
          </div>

          <p className="self-end text-xl font-kanit">
            &copy; {currentYear.getFullYear()} - luminr.co
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
