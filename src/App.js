import React from "react";
import Login from "./Components/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Navbar from "./Components/navbar/Navbar";
import Wishes from "./Components/Wishes/Wishes";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
