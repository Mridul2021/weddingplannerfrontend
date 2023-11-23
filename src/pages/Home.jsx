import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = isLoggedIn
      ? `${authState.user.name}'s tasks`
      : "Task Manager";
  }, [authState, isLoggedIn]);

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

  const signUpButtonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
  };

  return (
    <MainLayout>
      <div style={backgroundStyle}>
        {!isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Wedding Planner App
            </h1>
            <h3 className="text-xl mb-4">Join now to plan your wedding with us!</h3>
            <Link to="/signup" style={{ ...signUpButtonStyle, marginTop: "20px" }}>
              Sign Up
            </Link>
          </div>
        ) : (
          <>
          <h1 className="text-4xl font-bold">
            Welcome {authState.user.name}
          </h1>
          <h1 className="text-xl font-bold mt-8 mx-8 border-b border-b-gray-300" style={{fontSize:'20px'}}>
            Crafting Dreams into Unforgettable Moments: Your Perfect Wedding Awaits. Let Us Plan
          </h1>
            <Tasks />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Home;
