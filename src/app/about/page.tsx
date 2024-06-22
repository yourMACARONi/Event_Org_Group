"use client";
import {
  Staatliches as Staat,
  Poppins as Popp,
  Poppins,
} from "next/font/google";

import { cn } from "@/lib/utils";

import Navbar from "../Navbar";
import Footer from "../footer";

const staat = Staat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const popp = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="relative w-full h-[100%] pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/whitebg.jpg)",
          }}
        ></div>

        <div className="relative z-10">
          <div className="relative">
            <img className="w-full h-64" src="/table.jpg" alt="table" />

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-center items-start p-4">
              <h5 className="font-bold text-4xl ml-20">About Us</h5>
              <p className="text-2xl font-extralight ml-20 ">
                Your trusted partner for creating unforgettable events
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-20 ">
            <p className="font-sans w-3/5 text-center text-7xl font-bold text-black">
              EVENT ORGANIZER
            </p>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-2 mt-20">
            <img
              className="h-[400px] w-[300px] object-cover shadow-lg hover:shadow-2xl"
              src="/girl.jpg"
              alt="Marriage"
            />
            <img
              className="h-[550px] w-[550px] object-cover shadow-lg hover:shadow-2xl"
              src="/marriage.jpg"
              alt="Girl"
            />
            <img
              className="h-[400px] w-[300px] object-cover shadow-lg hover:shadow-2xl"
              src="/family.webp"
              alt="Img3"
            />
          </div>

          <div></div>
          <div className="flex flex-col items-center gap-16 mt-0 max-w-3xl px-4 mx-auto">
            <h5 className="font-bold text-6xl text-center text-black mt-40">
              About Us
            </h5>
            <div className="text-2xl font-light text-center text-black whitespace-normal grid grid-cols-2 gap-x-[30px]">
              <p className="text-left">
                Welcome to EVENTWISE, where dreams come to life and every event
                is a story worth telling. We are a premier event organizing
                company dedicated to transforming your visions into memorable
                experiences. With years of experience and a passion for
                perfection, we pride ourselves on delivering events that are not
                only seamless but also extraordinary.
              </p>
              <p className="text-left">
                Our team of skilled professionals is committed to ensuring every
                detail is meticulously planned and executed. We blend creativity
                with precision to craft unique and unforgettable events tailored
                to your desires. Let us handle the complexities, so you can
                enjoy the magic of your special day.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-10 w-full min-h-full mt-40">
            <img
              className="h-[350px] w-[450px] ml-[15%] object-cover shadow-lg hover:shadow-2xl"
              src="/vision.webp"
              alt="vision"
            />
            <div className="flex flex-col mr-[15%] items-center w-2/3 p-6">
              <h5
                className={cn(
                  staat.variable,
                  "font-sans text-7xl text-amber-400 mb-4 font-bold"
                )}
              >
                Vision
              </h5>
              <p
                className={cn(
                  popp.variable,
                  "font-sans text-2xl font-light text-black whitespace-normal text-left"
                )}
              >
                To be the most innovative and respected event management company
                in the industry, known for delivering unforgettable experiences
                and creating lasting memories for our clients and their guests.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-10 w-full min-h-full mt-10">
            <img
              className="h-[400px] w-[450px] ml-[15%] object-cover shadow-lg hover:shadow-2xl"
              src="/Mission.jpg"
              alt="mission"
            />
            <div className="flex flex-col mr-[15%] items-center w-2/3 p-6">
              <h5
                className={cn(
                  staat.variable,
                  "font-sans text-7xl text-amber-400 mb-4 font-bold"
                )}
              >
                Mission
              </h5>
              <p
                className={cn(
                  popp.variable,
                  "font-sans absolute-0 text-2xl font-light text-black whitespace-normal text-left"
                )}
              >
                Our mission is to provide exceptional event management services
                by understanding our clients' unique needs, leveraging our
                creativity and expertise, and delivering seamless, high-quality
                events that exceed expectations. We are committed to fostering
                strong relationships with clients, vendors, and partners, and
                continuously improving our processes to ensure every event is a
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
