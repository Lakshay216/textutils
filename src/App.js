
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
      showAlert("dark mode has been enabled", "success")
      document.title = "TextUtils - darkmode"
      setTimeout(() => {
        document.title = "TextUtils "
      }, 2000);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert(" light mode has been enabled", "success")
      document.title = "TextUtils - lightmode"
      setTimeout(() => {
        document.title = "TextUtils "
      }, 2000);
    }

  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  return (
    <>
<Router>
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
  <Alert alert={alert} />
  <div className="container my-3">
    {/* <About/> */}
    <Routes>
      <Route path="/about" element={<About mode={mode} />} />
      <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
    </Routes>
  </div>
</Router>
    </>
  )
}

export default App;
