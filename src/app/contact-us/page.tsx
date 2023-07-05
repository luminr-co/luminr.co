"use client";
import React, { FormEvent, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

import { Navbar } from "../sections/Navbar";
import { Footer, MobileFooter } from "../sections/Footer";
import { Card } from "../components/Card";
import { Background } from "../components/Background";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mknlwkba");
  if (state.succeeded) {
    toast.success("Message sent sucessfully.");
  } else if (!state.succeeded) {
    toast.error("Error occured! Please try again later");
  }

  return (
    <>
      <Background noOfEllipses={2} />
      <main className="z-50  ">
        <Navbar />
        <div className="mx-auto w-11/12 mt-10 ">
          <h1 className="font-mons text-[4rem]  max-w-3xl leading-[normal] text-beige md:text-left font-bold">
            We’d love to hear about your project
          </h1>
          <p className="text-beige text-[2rem] font-normal leading-[120.5%] mb-10">
            Get in touch!
          </p>
          <div className="form  grid md:grid-cols-2 justify-items-center content-center     mb-24 ">
            <Card customClass="w-full gap-5  grid-col-2">
              <form onSubmit={handleSubmit}>
                <div className="mb-6 w-11/12 mx-auto mt-4">
                  <label
                    htmlFor="name"
                    className="text-xl block 
                not-italicfont-kanit  font-medium leading-[normal] text-black "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                    placeholder="John Doe"
                    // pattern="/^([A-Za-z]+[,\.\s]?|[A-Za-z]+['\-]?)+$/"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6 w-11/12 mx-auto mt-4">
                  <label
                    htmlFor="email"
                    className="text-xl] block 
                not-italicfont-kanit font-medium leading-[normal] text-black "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                    placeholder="mmmyess@gmail.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6 w-11/12 mx-auto mt-4">
                  <label
                    htmlFor="description"
                    className="text-xl block 
                not-italicfont-kanit font-medium leading-[normal] text-black "
                  >
                    Description
                  </label>
                  <textarea
                    rows={10}
                    name="description"
                    id="description"
                    className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                    placeholder="This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE.  "
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="w-full text-center mb-3">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="rounded-lg border-2 border-black font-kanit text-xl font-medium  py-2 px-3 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Card>
            <div className="flex items-center">
              <Image
                src="/handshake.svg"
                alt="handshake"
                height={150}
                width={150}
                className="w-52 md:w-[25rem] mt-20 md:mt-0"
              />
            </div>
          </div>
        </div>
        <Footer />
        <MobileFooter />
        <Toaster />
      </main>
    </>
  );
};

export default ContactUs;
