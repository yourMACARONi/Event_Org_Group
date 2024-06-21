import React, { useState } from 'react';
import Image from 'next/image';

const EventCard = ({ event }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="event-card" 
        style={{ 
          backgroundColor: 'white', 
          padding: '10px', 
          borderRadius: '10px', 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

      <div className="event-card-image" 
         style={{ 
          position: 'relative', 
          width: '100%', 
          height: '200px', 
          borderRadius: '8px', 
          overflow: 'hidden' }}>
        
        <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" className="rounded-lg" />
        
        <div className="event-card-heart" 
          style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            cursor: 'pointer'   
          }}
          onClick={toggleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill={isLiked ? 'red' : 'none'}
            stroke={isLiked ? 'red' : 'currentColor'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      </div>
      
      <div className="event-card-details" style={{ marginTop: '1.5rem', padding: '1rem' }}>
      <h3 className='text-black' style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>{event.title}</h3>
        <div className="event-card-info" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'black' }}>
          <div className="event-card-date">📅 {event.date}</div>
          <div className="event-card-location">📍 {event.location}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

