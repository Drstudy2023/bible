import React, { useState } from 'react';
import SignIn from './components/Background/SignIn';
import SignUp from './components/Background/SignUp';
import BackgroundVideo from './components/Background/BackgroundVideo';
import Navbar from "./components/Header/Navbar";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  return (

    <>
    <Navbar/>
    <BackgroundVideo>
      {isSignIn ? (
        <SignIn toggleView={toggleView} />
      ) : (
        <SignUp toggleView={toggleView} />
      )}
    </BackgroundVideo>
    </>

  );
};

export default App;
