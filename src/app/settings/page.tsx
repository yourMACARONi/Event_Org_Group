import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "../Navbar";
import Footer from "../footer";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
} from "react-icons/fa";

function Settings() {
  return (
    <section
      className="h-screen flex-col overflow-y-auto scrollbar-hide"
      style={{ background: "#141414" }}
    >
      {/* header */}
        <Navbar/>
      {/* body */}
      <div
        className="body bg-white flex flex-col "
        style={{
          background: "linear-gradient(to bottom, #2A2600, #000000)",
        }}
      >
        {/* top Part of body */}
        <div className="flex flex-col items-center mt-2 ">
          <h1
            className="text-yellow-300 text-4xl font-bold"
            style={{
              fontFamily: "Staatliches , sans-serif",
            }}
          >
            SETTINGS
          </h1>
          <div className="mt-4">
            <Avatar className="w-28 h-28 mt-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-white font-medium text-2xl mt-4">
            Organizer Name
          </h1>
          <div className="flex flex-row items-center mt-4 w-full">
            <div className="w-full h-0.5 bg-gradient-to-l from-white to-transparent right-0 "></div>
            <div className="w-full h-0.5 bg-gradient-to-r from-white to-transparent left-0"></div>
          </div>
        </div>
        {/* forms Part of body */}
        <div
          className="mt-4 w-2/5 mx-auto text-white flex flex-col"
          style={{
            fontFamily: "Inter , sans-serif",
          }}
        >
          <div>
            <h1 className="font-semibold">Account Details</h1>
            <div className="mt-2">
              <h2 className="font-light">Edit Email</h2>
              <Input
                type="text"
                placeholder="Enter your Email"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2 ">
              <h2 className="font-light">Edit Username</h2>
              <Input
                type="text"
                placeholder="Enter your Username"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2">
              <h2 className="font-light">Change Password</h2>
              <Input
                type="text"
                placeholder="Enter your new Password"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
            <div className="mt-2">
              <h2 className="font-light">Contact Number</h2>
              <Input
                type="text"
                placeholder="Enter your contact number"
                className="pl-6 mt-2 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Part of body */}
        <div className=" flex flex-col items-center mt-6 mb-8">
          <Button
            variant="outline"
            className="px-8"
            style={{
              background: "#27262B",
              color: "white",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Create New Event Portfolio
          </Button>

          <Button
            variant="outline"
            className="px-20 mt-4"
            style={{
              background: "#FEC52B",
              color: "black",
            }}
          >
            Submit
          </Button>
          <a href="/help" className="mt-2 flex items-center space-x-2">
            <h1 className="text-white font-normal hover:text-blue-300 transition duration-500">
              Help & FAQs
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-help"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
          </a>
        </div>
      </div>

      {/* footer */}
      
      <div>
        <Footer/>
      </div>
       
    
    </section>
  );
}

export default Settings;