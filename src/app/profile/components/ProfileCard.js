import React from 'react';

const ProfileCard = () => {
  return (
    <>
      <h4 style={{ textAlign: 'center', fontSize: '2.8rem', color: 'white', fontWeight: 'bold', marginTop: '40px' }}> 
        PROFILE
      </h4>

      <div className="profile-card" style={{ backgroundColor: '#ccc108', padding: '10px', 
        borderRadius: '40px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        width: '40%', display: 'inline-block',
        marginRight: '10px', 
        margin: '0 auto',  
        textAlign: 'center',  
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'center',  
        alignItems: 'center',
      }}>


        <div style={{ textAlign: 'center' }}>
          <img
            className="w-full h-28 object-cover object-center rounded-full"
            src="/Logo.png"
            style={{ display: 'inline-block' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
        <h3 style={{ textAlign: 'center', fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}> 
         Organizer Name: </h3>
        <h5 style={{ textAlign: 'center', fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}> 
         Event Organizer Address: </h5> <br/>
          

          <div className="mb-2">
            <strong>Open:</strong> 6:00AM<br />
            <strong>Close:</strong> 8:00PM
          </div>

        </div>
      </div>
    </>
  );
};
  
export default ProfileCard;
