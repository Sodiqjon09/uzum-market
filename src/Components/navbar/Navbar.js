import React from "react";
import Topbar from "./Topbar/Topbar";
import "./Navbar.css";
import Suggestion from "./suggestion-priority/Suggestion";
import Bottombar from "./Bottombar/Bottombar";

function Navbar() {
  return (
    <div>
      <Topbar />
      <Suggestion />
      <Bottombar />
    </div>
  );
}

export default Navbar;
