// src/App.js
import React from 'react';
import './App.css';
import BackgroundVideo from './components/Background/BackgroundVideo';
import  Navbar  from './components/Header/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackgroundVideo/>
    </div>
  );
}

export default App;
