"use client"

import Navbar from "../Navbar";
import Footer from "../footer";
import * as React from "react";
import { Calendar as BigCalendar} from 'react-big-calendar';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Calendar as DatePicker } from "@/components/ui/calendar";


const localizer = momentLocalizer(moment);

export function Schedule() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [events, setEvents] = React.useState<{ title: string, start: Date, end: Date }[]>([]);
  const [newEvent, setNewEvent] = React.useState<string>("");

  const handleAddEvent = () => {
    if (date && newEvent.trim()) {
      const newEventObject = {
        title: newEvent,
        start: date,
        end: date,
      };
      setEvents((prevEvents) => [...prevEvents, newEventObject]);
      setNewEvent("");
    }
  };

  const handleDeleteEvent = (eventIndex: number) => {
    setEvents((prevEvents) => prevEvents.filter((_, index) => index !== eventIndex));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex w-full justify-center items-start">
          <div className="flex flex-col items-center p-4">
            <DatePicker
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
            <div className="mt-4">
              <h2>Events for {date?.toDateString()}</h2>
              <ul>
                {events
                  .filter(event => event.start.toDateString() === date?.toDateString())
                  .map((event, index) => (
                    <li key={index} className="flex justify-between items-center">
                      {event.title}
                      <button
                        onClick={() => handleDeleteEvent(index)}
                        className="ml-2 p-1 bg-red-500 text-white rounded"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Add a new event"
                className="border rounded p-2 text-black"
              />
              <button
                onClick={handleAddEvent}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                Add Event
              </button>
            </div>
          </div>
          <div className="w-3/5 p-4 bg-white text-black">
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              className="bg-white text-black"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedule;
