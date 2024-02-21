import React from "react";
// Update the path

const About = () => {
  return (
    <div className="about-container">
      <div
        className="about-image"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/12993769/pexels-photo-12993769.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loadjpeg?auto=compress&cs=tinysrgb&w=1260&h=7https://images.pexels.com/photos/15146883/pexels-photo-15146883/free-photo-of-motorcycles-par"})`,
        }}
      />
      <div className="about-header">
        <h1>Bike Rental</h1>
     </div>
      <div className="about-content">
        <h1>Welcome</h1>
        <p>
          Welcome to our rental platform! The customer is very important, the
          customer will be followed by the customer. But at the same time they
          happened with great labor and pain. For to come to the smallest
          detail, no one should practice any kind of work unless he derives some
          benefit from it.
        </p>
      </div>
      <div className="about-content">
        <h1>Benefits</h1>
        <p>
          Benefit from the experiences of others. Explore community ratings and
          reviews to gain insights into the quality of properties and the
          overall rental experience.Tailor your rental experience to suit your
          needs. Choose from flexible booking options, including short-term and
          long-term rentals, allowing you to plan your stay on your terms.
        </p>
      </div>
      <div className="about-content">
        <h1>About us</h1>
        <p>
          Our platform is designed with simplicity in mind, providing an
          intuitive and user-friendly experience. Easily navigate through
          listings, filter searches, and find your ideal rental property
          effortlessly.Explore a diverse range of rental properties, from cozy
          apartments to spacious houses, ensuring there's something for every
          taste and preference.
        </p>
      </div>
      <footer className="about-footer">
        <p>&copy; 2023 Bike Rental. All rights reserved.</p>
        <p>Contact us: info@BikeRental.com</p>
        <p>Mobile:7094579926</p>
        <p>Follow us on social media:Naveen@gmail.com</p>
      </footer>
    </div>
  );
};

export default About;