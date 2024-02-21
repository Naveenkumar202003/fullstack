import React from 'react';
const Home = () => {
  const handleGetStartedClick = () => {
        window.location.href = '/signup';
      };
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',  
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="https://player.vimeo.com/external/451802820.hd.mp4?s=f2ee7084a1033735f9f6c839ac85fb2670d2d261&profile_id=174&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color on top of the video background
          textAlign: 'center',
        }}
      > 
         <div className="get-started-button">
        <button onClick={handleGetStartedClick}>Make A start</button>
      </div>
        <h1>Welcome to Our Bike Rental Service</h1>
        { <p>
          
        </p> }
        {/* Add more content related to your parcel service */}
      </div>
    </div>
  );
};

export default Home;
