import Image from "next/image";
import { Staatliches as Staat, Poppins as Popp, Poppins } from 'next/font/google';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
} from "react-icons/fa";

const staat = Staat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: "400"
})

const popp = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: "400"
})

export default function Home() {
  return (
     
    <div>
      <nav className="bg-black">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex item-center">
              <div>
                <Image
                  src="/eLogo.png"
                  alt="event logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className="hidden md:block  ">
              <div className="ml-flex items-center spce-x-4">
                <a
                  href="/"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Home
                </a>

                <a
                  href="/events"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Events
                </a>

                <a
                  href="/services"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Services
                </a>

                <a
                  href="/schedule"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Schedule
                </a>

                <a
                  href="/about"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative flex items-center mr-8 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 py-6 bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="relative w-full h-[100%] pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/whitebg.jpg)",
          }}
        ></div>

        <div className="relative z-10">
          <div className="relative">
            <img className="w-full h-32" src="/table.jpg" alt="table" />

            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col justify-center items-start p-4">
              <h5 className="font-bold text-3xl ml-20 mt-10">About Us</h5>
              <p className="text-m font-extralight ml-20">
                Your trusted partner for creating unforgettable events
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-20 ">
            <p className="font-sans w-3/5 text-center text-4xl text-black">
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

          <div className="flex flex-col items-center gap-16 mt-0 max-w-3xl px-4 mx-auto">
            <h5 className="font-bold text-4xl text-center text-black mt-40">
              About Us
            </h5>
            <div className="text-base font-light text-center text-gray-700 whitespace-normal grid grid-cols-2 gap-x-[30px]">
              <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, veslkhoitibulum magna sed, convallis ex. Cras sit
              </p>
              <p className="text-justify">
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cras sit
              amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
            </div>
             <h1 className="font-normal text-1xl text-center text-black mt-20">
               name@gmail.com
             </h1>
          </div>

        

          <div className="flex flex-row justify-center items-center gap-x-10 w-full min-h-full mt-40">
            <img
              className="h-[350px] w-[450px] ml-[15%] object-cover shadow-lg hover:shadow-2xl"
              src="/vision.webp"
              alt="vision"
            />
            <div className="flex flex-col mr-[15%] items-center w-2/3 p-6">
              <h5 className={cn(staat.variable, "font-sans text-4xl text-black mb-4")}>Vision</h5>
              <p className={cn(popp.variable,"font-sans text-base font-light text-gray-700 whitespace-normal text-justify")}>
                To be the most innovative and respected event management company
                in the industry, known for delivering unforgettable experiences
                and creating lasting memories for our clients and their guests.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-10 w-full min-h-full mt-10">
            <img
              className="h-[350px] w-[450px] ml-[15%] object-cover shadow-lg hover:shadow-2xl"
              src="/Mission.jpg"
              alt="mission"
            />
            <div className="flex flex-col mr-[15%] items-center w-2/3 p-6">
              <h5 className={cn(staat.variable, "font-sans text-4xl text-black mb-4")}>Mission</h5>
              <p className={cn(popp.variable,"font-sans absolute-0 text-base font-light text-gray-700 whitespace-normal text-justify")}>
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
      <div
        className="footer bg-gray-200 text-white h-1/3 rounded-t-lg border-t-1 border-solid border-gray-900 pb-30 flex-row flex "
        style={{
          background: "#000508",
        }}
      >
        <div className="leftPart flex-col flex w-2/5">
          <div className="ml-32">
            <img
              src="/eLogo.png"
              alt="Image Logo"
              className="mt-12 w-20 object-contain"
            />
            <h1 className="mt-6">Event Wise Accounts.</h1>
            <div className="flex items-center justify-start mt-8">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaYoutube size={32} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaDiscord size={32} />
              </a>
              <a
                href="https://www.reddit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaReddit size={32} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={32} />
              </a>
            </div>
            <h1 className="text-gray-500 text-sm mt-6">
              &copy; 2024 Your Company Name. All rights reserved.
            </h1>
          </div>
        </div>

        <div className="midPart flex-row flex w-1/3 space-x-20 ">
          <div className="flex-col flex mt-12 ml-36">
            <h1 className="font-normal  mb-2">EVENTWISE</h1>
            <div className="font-thin space-y-2">
              <h2>Grants</h2>
              <h2>EventWise cop</h2>
              <h2>Media Kit</h2>
              <h2>Careers</h2>
              <h2>Disclamer</h2>
            </div>
          </div>
          <div className="flex-col flex mt-12">
            <h1 className="font-normal  mb-2">GET CONNECTED</h1>
            <div className="font-thin space-y-2">
              <h2>Ecosystem</h2>
              <h2>Blog</h2>
              <h2>Newsletter</h2>
            </div>
          </div>
        </div>
        <div className="rightPart w-3/12 space-x-20  flex flex-col items-start">
          <div className="mt-12 ml-32 flex items-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGlobe size={24} className="mr-2" />
              <h1 className="ml-2">EN</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
