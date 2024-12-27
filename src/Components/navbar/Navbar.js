import React from "react";
import Topbar from "../../pages/Topbar/Topbar";
import "./Navbar.css";
import Suggestion from "../../pages/suggestion-priority/Suggestion";
import Bottombar from "../../pages/Bottombar/Bottombar";
import { languages } from "../../data/data";

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
