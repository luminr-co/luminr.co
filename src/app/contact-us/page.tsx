"use client";
import React, { FormEvent, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

import { Navbar } from "../sections/Navbar";
import { Footer, MobileFooter } from "../sections/Footer";
import { Card } from "../components/Card";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mknlwkba");
  if (state.succeeded) {
    toast.success("Message sent sucessfully.");
  } else {
    toast.error("Error occured! Please try again later");
  }

  return (
    <main className="z-50  ">
      <Navbar />
      <div className="mx-auto w-11/12 mt-10 ">
        <h1 className="font-mons text-[4rem]  max-w-3xl text-beige text-left font-bold">
          We’d love to hear about your project
        </h1>
        <p className="text-beige text-[2rem] font-normal leading-[120.5%] mb-10">
          Get in touch!
        </p>
        <div className="form  grid md:grid-cols-2 content-evenly   gap-28  mb-24 ">
          <Card customClass="w-full md:w-[48rem] h-auto justify-self-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 w-11/12 mx-auto mt-4">
                <label
                  htmlFor="name"
                  className="text-[2rem] block 
                  not-italicfont-kanit font-medium leading-[normal] text-black "
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
                  className="text-[2rem] block 
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
                  className="text-[2rem] block 
                  not-italicfont-kanit font-medium leading-[normal] text-black "
                >
                  Descripion
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
              <div className="w-full text-center">
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
          <Image
            src="/handshake.svg"
            alt="handshake"
            height={150}
            width={150}
            className="w-96 !h-auto"
          />
        </div>
      </div>
      <Footer />
      <MobileFooter />
      <Toaster />
    </main>
  );
};

export default ContactUs;
