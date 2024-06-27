// Event_Attendee.tsx

"use client";

import { useState } from 'react';
import { Attendee_Table } from '@/components/localComponent/attendee-table'; 
import EventInfoBox from '@/components/localComponent/Event-Info-box'; 
import { attendees, eventInfo as defaultEventInfo } from "@/app/eventData";
import Navbar from '../Navbar';
import Footer from '../footer';

export default function Attendee() {
  const [eventInfo, setEventInfo] = useState(defaultEventInfo);
  return (
    <main >
        <Navbar/>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
        
      
      {/* Event Info Box component render here */}
      <div className="w-full max-w-5x">
        <EventInfoBox 
          totalVisitors={attendees.length} 
          eventName={eventInfo.eventName}
          location={eventInfo.location}
          date={eventInfo.date}
          time={eventInfo.time}
        />
      </div>

      {/* The Table component render here */}
      <div className="w-full max-w-5xl mt-8 text-black">
        <Attendee_Table attendees={attendees} />
      </div>
      
      </div>
      <Footer/>
    </main>
  );
}