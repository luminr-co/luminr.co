import React from "react";
import Image from "next/image";

import { Card } from "@/app/components/Card";

const MobileFooter = () => {
  const currentYear = new Date();
  return (
    <div className="w-11/12 mx-auto mb-10 block md:hidden">
      <Card customClass="py-6">
        <Image
          src={"/footer-logo.svg"}
          alt="logo"
          height={100}
          width={150}
          unoptimized
        />
        <div className="flex flex-col  py-7 gap-7">
          <div className="contact-us flex flex-col gap-4 font-kanit">
            <p className="text-xl font-semibold ">Contact Us</p>
            <p className="company-email text-base">hello@lumir.co</p>
            <p className="location text-base font-normal ">
              Kaldhara <br /> Kathmandu,Nepal
            </p>
          </div>

          <div className="socials font-kanit flex flex-col gap-4">
            <p className="text-xl font-semibold"> Socials</p>
            <a
              href="https://instagram.com/luminr.co?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              className="text-base "
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/luminr-co/about/?viewAsMember=true"
              target="_blank"
              className="text-base "
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093330643165&mibextid=ZbWKwL"
              target="_blank"
              className="text-base "
            >
              Facebook
            </a>
          </div>
          <p className=" self-center text-base  font-kanit">
            &copy; {currentYear.getFullYear()} - luminr.co
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MobileFooter;
