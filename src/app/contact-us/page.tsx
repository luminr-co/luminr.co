"use client";
import React, { FormEvent, useRef } from "react";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import { Card } from "../components/Card";
import Image from "next/image";

const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(
      "name= ",
      nameRef.current?.value,
      " ",
      " email= ",
      emailRef.current?.value,
      " ",
      " description= ",
      descriptionRef.current?.value
    );
  };

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
        <div className="form  flex items-center gap-28  mb-24">
          <Card width="w-[48rem]" height="h-auto">
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
                  ref={nameRef}
                  id="email"
                  className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                  placeholder="John Doe"
                  // pattern="/^([A-Za-z]+[,\.\s]?|[A-Za-z]+['\-]?)+$/"
                  required
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
                  ref={emailRef}
                  id="email"
                  className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                  placeholder="mmmyess@gmail.com"
                  required
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
                  ref={descriptionRef}
                  id="description"
                  className=" bg-beige border-black text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-2 focus:outline-none"
                  placeholder="This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE. This is some epic project description. WOW. NICE.  "
                  required
                />
              </div>
              <div className="w-full text-center">
                <button className="rounded-lg border-2 border-black font-kanit text-xl font-medium  py-2 px-3 ">
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
    </main>
  );
};

export default ContactUs;
