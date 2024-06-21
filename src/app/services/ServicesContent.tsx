"use client";

import { useState } from 'react';
import EventCard from './components/EventCard';

const events = [
  {
    title: 'Mr. & Mrs. Malik Wedding',
    date: '12 August, 23',
    location: 'Cagayan De Oro City',
    image: '/services/event1.jpg',
  },
  {
    title: 'Barbellas Birthday',
    date: '12 August, 23',
    location: 'Cagayan De Oro City',
    image: '/services/event2.jpg',
  },
  {
    title: 'Class of 1979 Reunion',
    date: '25-27 July, 23',
    location: 'Cagayan De Oro City',
    image: '/services/event3.jpg',
  },
  {
    title: 'Sinulog Festival',
    date: 'Third Sunday of January',
    location: 'Cebu City',
    image: '/services/event4.jpg',
  },
  {
    title: 'The Voice Kids Mis Or',
    date: '12 April, 24',
    location: 'Gingoog City',
    image: '/services/event5.jpg',
  },
  {
    title: 'MESCON',
    date: '10 September, 24',
    location: 'Cagayan De Oro City',
    image: '/services/event6.jpg',
  }
];

export default function Services() {
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <div className="w-full max-w-5xl">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search Event"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300"
              style={{ color: "black" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
