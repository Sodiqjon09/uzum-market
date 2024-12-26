import React from "react";
import "./Home.css";
import MainContent from "../Main-content/MainContent";
import Extandle from "../Extandle/Extandle";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Extandle />
      <div style={{ marginTop: "50px" }}>ㅤㅤㅤ️️️️️</div>
    </div>
  );
}

export default Home;
