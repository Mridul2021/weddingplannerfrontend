// About.js
import React from 'react';
import Navbar
 from '../components/Navbar';
const About = () => {
  const backgroundStyle = {
    backgroundImage:
      "url(https://r4.wallpaperflare.com/wallpaper/465/775/660/wedding-ring-gold-pearl-flowers-white-background-photography-depth-of-field-2-gold-wedding-band-wallpaper-e27132d04da67e5b2a18d2d56018f9e2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: '89.8vh', // Set full height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">About Our Wedding Planner App</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our wedding planner app! We are dedicated to making your special day
          unforgettable. Our team of experienced planners is here to assist you at every step
          of the wedding planning process.
        </p>
        <p className="text-gray-600 mb-6">
          Whether you're looking for a venue, need help with decorations, or want assistance with
          coordinating the schedule, we've got you covered. Our goal is to turn your vision into
          reality and create a magical experience for you and your guests.
        </p>
        <p className="text-gray-600 mb-6">
          Feel free to explore our app and discover the features that make wedding planning a
          breeze. If you have any questions or need assistance, don't hesitate to contact our
          friendly team.
        </p>
        <p className="text-gray-600">
          Thank you for choosing our wedding planner app. We look forward to being a part of your
          special day!
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
