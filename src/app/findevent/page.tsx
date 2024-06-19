import Navbar from "../Navbar"
import { Input } from "@/components/ui/input";

export default function FindEvent() {
    return (
        <>
        <Navbar/>
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
                className="pl-10 py-6 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                style={{ color: "black" }}
              />
            </div>
          
        </>
    )
}