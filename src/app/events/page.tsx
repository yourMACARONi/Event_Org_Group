import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "../Navbar";
import Footer from "../footer";
import {
  FaClock,
  FaCalendar,
  FaInfoCircle,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTelegram,
  FaGlobe,
  FaMapPin,
} from "react-icons/fa";

function eventDetails() {
  return (
    <section
      className="h-screen flex-col scrollbar-hide overflow-y-auto"
      style={{ background: "#09080A" }}
    >
      {/* header */}
     <Navbar/>
      {/* details cover */}
      <div className="details_cover bg-white flex justify-center bg-event-details h-screen w-screen bg-cover">
        <div className="title" style={{ marginTop: "18%" }}>
          <h1 className="text-white font-bold text-7xl ">Event Detail</h1>
          <p className="text-white font-medium text-lg">
            <span className="text-yellow-500 font-bold">|</span> A comprehensive
            overview of all the upcoming events
          </p>
        </div>
      </div>

      <div className="body min-h-screen min-w-screen">
        <div className="container mx-auto max-w-[87%]">
          {/* Date and Title */}
          <div className="title font-normal text-xl">
            <p className="text-yellow-500 font-normal text-2xl mt-20">
              September 2023
            </p>
            <h1 className="text-white font-medium text-7xl mt-4">
              Booked Event
            </h1>
          </div>

          {/* Content */}
          <div className="all flex flex-row text-white">
            {/* Left content */}
            <div className="leftpart " style={{ width: "70%" }}>
              <div className="Content-inside ml-10 ">
                {/* first Content */}
                <div className="1stContent mt-24 ">
                  <h1 className="courtesy text-5xl font-normal ">
                    Mr./Mrs./Ms./Sir/Ma'am
                  </h1>
                  {/* Boxes */}
                  <div className="boxes flex flex-row space-x-2 mt-12">
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaCalendar className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Date
                          </h3>
                          <p className="text-white font-bold">
                            18 September 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaClock className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Time
                          </h3>
                          <p className="text-white font-bold">
                            15:00PM - 22:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "35%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaInfoCircle className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Type
                          </h3>
                          <p className="text-white font-bold">WEDDING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="msgContainer mt-8">
                    <p
                      className="titlemsg font-normal text-xl"
                      style={{ color: "#FFC52A" }}
                    >
                      EVENT INVITATION MESSAGE
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      We are pleased to invite you to our Annual Corporate Gala.
                      This prestigious event will be held on November 15th at
                      7:00 PM, at the Grand Ballroom, Downtown Hotel.
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      Join us for an evening of networking, fine dining, and
                      special guest speakers. It's an excellent opportunity to
                      connect with industry leaders and celebrate our collective
                      achievements.
                    </p>
                  </div>
                  <div className="invContainer mt-16">
                    <h1 className="text-3xl" style={{ color: "#FFC52A" }}>
                      PEOPLE TO INVITE
                    </h1>
                    <div className="invList mt-4">
                      <ul className="list-disc list-inside ml-6 space-y-5 text-lg">
                        <li>Michael Brown</li>
                        <li>Jessica and Daniel Smith</li>
                        <li>Amanda Lee</li>
                        <li>Robert and Laura Wilson</li>
                        <li>Chris Green</li>
                        <li>Emma Thompson</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Second Content */}
                <div className="2ndContent mt-24 ">
                  <h1 className="courtesy text-5xl font-normal ">
                    Mr./Mrs./Ms./Sir/Ma'am
                  </h1>
                  {/* Boxes */}
                  <div className="boxes flex flex-row space-x-2 mt-12">
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaCalendar className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Date
                          </h3>
                          <p className="text-white font-bold">
                            18 September 2023
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "30%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaClock className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Time
                          </h3>
                          <p className="text-white font-bold">
                            15:00PM - 22:00PM
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-24 bg-gray-800 rounded-lg"
                      style={{ background: "#212020", width: "35%" }}
                    >
                      <div className="insidebox flex flex-row items-center h-full">
                        <div
                          className="circle rounded-full h-14 w-14 flex items-center justify-center ml-10"
                          style={{ background: "#EAB308" }}
                        >
                          <FaInfoCircle className="w-8 h-8" />
                        </div>
                        <div className="mt-2 text-white ml-8">
                          <h3
                            className="text-white"
                            style={{ color: "#EAB308" }}
                          >
                            Event Type
                          </h3>
                          <p className="text-white font-bold">WEDDING</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="msgContainer mt-8">
                    <p
                      className="titlemsg font-normal text-xl"
                      style={{ color: "#FFC52A" }}
                    >
                      EVENT INVITATION MESSAGE
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      We are thrilled to invite you to celebrate our wedding on
                      August 25th at 4:00 PM, at the Rose Garden Chapel.
                    </p>
                    <p className="msg mt-10 font-normal text-3xl mr-14">
                      Join us as we exchange vows and begin our new journey
                      together. There will be a reception to follow with dinner,
                      dancing, and lots of love.
                    </p>
                  </div>
                  <div className="invContainer mt-16">
                    <h1 className="text-3xl" style={{ color: "#FFC52A" }}>
                      PEOPLE TO INVITE
                    </h1>
                    <div className="invList mt-4">
                      <ul className="list-disc list-inside ml-6 space-y-5 text-lg">
                        <li>Michael Brown</li>
                        <li>Jessica and Daniel Smith</li>
                        <li>Amanda Lee</li>
                        <li>Robert and Laura Wilson</li>
                        <li>Chris Green</li>
                        <li>Emma Thompson</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right content */}
            <div
              className="rightpart  h-screen space-y-44"
              style={{
                width: "30.00%",
              }}
            >
              <div className="firstmap">
                <div
                  className="mapContainer rounded-xl mt-20 "
                  style={{ marginLeft: 0, padding: 0, height: "400px" }}
                >
                  {" "}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.5412188133272!2d124.65698204210297!3d8.483344512064226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c3ea4d24c7%3A0x549b347552a4b75d!2sLimketkai%20Luxe%20Hotel!5e0!3m2!1sen!2sph!4v1718695948464!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{
                      borderBottom: "1px black solid",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mapInfo flex flex-col bg-white text-black h-full rounded-b-lg">
                  <div className="mapInfoCOntainer mt-12  ml-12">
                    <div className="mapAddress flex flex-row  items-center">
                      <div
                        className="circle rounded-full h-14 w-14 flex items-center justify-center"
                        style={{ background: "#EAB308" }}
                      >
                        <FaMapPin
                          className="w-8 h-8"
                          style={{ color: "white" }}
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="eventLocTitle text-gray-500">
                          EVENT LOCATION
                        </h3>
                        <h2 className="eventLoc  font-bold text-2xl">
                          Lux Hotel
                        </h2>
                      </div>
                    </div>
                    <div
                      className="underline  mt-5"
                      style={{
                        width: "80%",
                        borderBottom: "2px solid black",
                      }}
                    ></div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT NAME
                    </div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT DESCRIPTION
                    </div>
                  </div>
                </div>
              </div>
              <div className="secondmap">
                <div
                  className="mapContainer rounded-xl "
                  style={{ marginLeft: 0, padding: 0, height: "400px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.5412188133272!2d124.65698204210297!3d8.483344512064226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2c3ea4d24c7%3A0x549b347552a4b75d!2sLimketkai%20Luxe%20Hotel!5e0!3m2!1sen!2sph!4v1718695948464!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{
                      borderBottom: "1px black solid",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    // allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mapInfo flex flex-col bg-white text-black h-full rounded-b-lg">
                  <div className="mapInfoCOntainer mt-12  ml-12">
                    <div className="mapAddress flex flex-row  items-center">
                      <div
                        className="circle rounded-full h-14 w-14 flex items-center justify-center"
                        style={{ background: "#EAB308" }}
                      >
                        <FaMapPin
                          className="w-8 h-8"
                          style={{ color: "white" }}
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="eventLocTitle text-gray-500">
                          EVENT LOCATION
                        </h3>
                        <h2 className="eventLoc  font-bold text-2xl">
                          Lux Hotel
                        </h2>
                      </div>
                    </div>
                    <div
                      className="underline  mt-5"
                      style={{
                        width: "80%",
                        borderBottom: "2px solid black",
                      }}
                    ></div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT NAME
                    </div>
                    <div className="eventName font-semibold mt-6 mb-32 text-xl">
                      EVENT DESCRIPTION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
      
    </section>
  );
}

export default eventDetails;