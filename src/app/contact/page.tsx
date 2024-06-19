import Image from "next/image";
import {
  Staatliches as Staat,
  Poppins as Popp,
  Poppins,
} from "next/font/google";


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
    <div>
      
            <Navbar/>

      <div className="relative z-10">
        <div className="relative">
          <img className="relative w-full h-full" src="/bg_img.png" alt="contact" />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 text-white flex flex-col justify-center items-center p-4">
            <h5 className="font-bold text-5xl ml-20 mt-[350px]">Contact Us</h5>
            <p className="text-m font-extralight ml-20">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </div>

      <div
        className="footer bg-gray-200 text-white h-1/3 rounded-t-lg border-t-1 border-solid border-gray-900 pb-30 flex-row flex "
        style={{
          background: "#000508",
        }}
      >
     <Footer/>
      </div>
    </div>
  );
} 
