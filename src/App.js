import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Background/SignIn";
import SignUp from "./components/Background/SignUp";
import BackgroundVideo from "./components/Background/BackgroundVideo";
import Navbar from "./components/Header/Navbar";
import HelpCenter from "./components/Background/HelpCenter";
import AboutUs from "./components/Background/AboutUs";
import Request from "./components/Background/Request";
import Post from "./components/Background/Post";

export const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Navbar />
      <BackgroundVideo>
        <BrowserRouter>
          <Routes>
            <Route path="/Login_or_Register" element={isSignIn ? (<SignIn toggleView={toggleView} />) : (<SignUp toggleView={toggleView} />)} />
            <Route path="/Request" element={<Request/>}/>
            <Route path="/Post" element={<Post/>}/>
            <Route path="/Help_Center" element={<HelpCenter/>}/>
            <Route path="/about_Us" element={<AboutUs/>}/>
          </Routes>
        </BrowserRouter>
      </BackgroundVideo>
    </>
  );
};

export default App;