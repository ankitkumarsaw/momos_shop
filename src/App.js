import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const colorMode = {
    dark: {
       backgroundColor: "#212529",
       color: "white"
    },
    light: {
       backgroundColor: "#f8f9fa",
       color: "black"
    }
  } 
  
  const[mode, setMode] = useState(colorMode.light)
  console.log(mode);
  console.log(colorMode.light);
  const enableDarkMode =() => {
    if(mode.backgroundColor === "#f8f9fa"){
       setMode(colorMode.dark)
       console.log('dark')
    }else{
       setMode(colorMode.light)
       console.log('light')
    }
  }
  return (
    <>
    <Navbar enableDarkMode = {enableDarkMode} mode = {mode}/>
    <Home mode = {mode}/>
    </>
  );
}

export default App;
