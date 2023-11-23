import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import MainLayout from '../layouts/MainLayout';

const Signup = () => {
  useEffect(() => {
    document.title = 'Signup';
  }, []);

  const backgroundStyle = {
    backgroundImage:
      'url(https://r4.wallpaperflare.com/wallpaper/465/775/660/wedding-ring-gold-pearl-flowers-white-background-photography-depth-of-field-2-gold-wedding-band-wallpaper-e27132d04da67e5b2a18d2d56018f9e2.jpg)', // Replace with your desired background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '89.8vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <MainLayout>
      <div style={backgroundStyle}>
        <SignupForm />
      </div>
    </MainLayout>
  );
};

export default Signup;
