import Image from 'next/image';


const PopularEvents = () => {
  return (
      <div className="mt-10 w-full px-4">
      <h2 style={{ display: 'flex', fontSize: '2rem', color: 'white', fontWeight: 'bold', marginLeft: '10px' }}>
        <br/>Popular Events </h2><br/>

      <div className="flex flex-row overflow-x-scroll space-x-6 mt-6 pb-6"> {events.map((event, index) => (
              <div key={index} className="event-card" 
              style={{ 
                    backgroundColor: 'white', 
                    padding: '10px', 
                    borderRadius: '10px', 
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: '16%', 
                    display: 'inline-block',
                    marginRight: '10px', 
                    overflowX: 'auto', 
                    whiteSpace: 'nowrap', 
                }}>

                <div className="event-card-image" style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '170px', 
                    borderRadius: '8px', 
                    overflow: 'hidden',
                    marginBottom: '1.5rem', 
                }}>

                    <img src={event.image} alt={event.title} style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                    }} />
                </div>

                    <div className="event-card-details" style={{ padding: '1rem' }}>
                    <h3 className='text-black' style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', fontWeight: 'bold', color: 'black' }}>{event.title}</h3>
                    <div className="event-card-info" style={{ display: 'flex', justifyContent: 'space-between',  fontSize: '0.1rem', color: 'black'}}>
                    <div className="event-card-date">📅 {event.date}</div>
                    <div className="event-card-location">📍 {event.location}</div>
                    </div>
                </div>
                </div>
            ))}
            </div>
      </div>
  );
};

const events = [
    {
      title: 'Mr. & Mrs. Malik Wedding',
      date: '12 August, 23',
      location: 'CDO City',
      image: '/services/event1.jpg',
    },
    {
      title: 'Barbellas Birthday',
      date: '12 August, 23',
      location: 'CDO City',
      image: '/services/event2.jpg',
    },
    {
      title: 'Class of 1979 Reunion',
      date: '25-27 July, 23',
      location: 'CDO City',
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
      location: 'CDO City',
      image: '/services/event6.jpg',
    }
  ];
export default PopularEvents;
