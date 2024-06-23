import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import InputField from "./inputField"; 

export default function MyEvents() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-start items-start space-x-4">
            {" "}
            {/* Align inputs and frame horizontally */}
            <div className="flex flex-col space-y-4">
              <InputField
                id="eventID"
                label="Event Name"
                placeholder="Fetch the event name"
              />
              <InputField
                id="eventDateID"
                label="Event Date"
                placeholder="Fetch event date"
              />
              <InputField
                id="eventTypeID"
                label="Event Type"
                placeholder="Fetch Event Type"
              />
              <InputField
                id="locationID"
                label="Location"
                placeholder="Fetch Location"
              />
            </div>
            {/* Adjust the sample frame */}
            <div
              className="relative flex items-center justify-center ml-10 mt-4"
              style={{
                border: "10px solid black",
                backgroundColor: "white",
                width: "20rem",
                height: "18rem",
                borderRadius: "1rem",
              }}
            >
              <div
                className="absolute inset-4 flex items-center justify-center"
                style={{
                  backgroundColor: "black",
                  width: "calc(100% - 2rem)",
                  height: "calc(100% - 2rem)",
                  borderRadius: "1rem",
                }}
              >
                <p className="text-amber-400">Fetch Event Image</p>
              </div>
            </div>
          </div>
          <InputField
            id="peopleInvitedID"
            label="People Invited"
            placeholder="Name and Email"
            className="h-96 mt-4"
            style={{ width: "40rem" }}
          />
          <div className="mt-11 w-full flex justify-center mb-10">
            {" "}
            {/* Center the button */}
            <button className="bg-amber-400 text-black w-96 py-2 rounded-3xl">
              Submit and Generate Invitation
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

