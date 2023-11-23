import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import MainLayout from '../layouts/MainLayout';

const Login = () => {
  const { state } = useLocation();
  const redirectUrl = state?.redirectUrl || null;

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const backgroundStyle = {
    backgroundImage:
      'url(https://r4.wallpaperflare.com/wallpaper/465/775/660/wedding-ring-gold-pearl-flowers-white-background-photography-depth-of-field-2-gold-wedding-band-wallpaper-e27132d04da67e5b2a18d2d56018f9e2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '89.8vh', // Set full height
    // width:'40vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <MainLayout>
      <div style={backgroundStyle}>
        <LoginForm redirectUrl={redirectUrl} />
      </div>
    </MainLayout>
  );
};

export default Login;
