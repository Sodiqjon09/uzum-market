import React from "react";
import Login from "./Components/login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Wishes from "./pages/Wishes/Wishes";
import { LanguageProvider } from "./LanguageSelector"; // Import the LanguageProvider

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishes" element={<Wishes />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
