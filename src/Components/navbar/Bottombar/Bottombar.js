import React from "react";
import DivImage from "../../../asset/images/div.image.png";
import { types } from "../../../data/data";
import { Link } from "react-router-dom";
import "./Bottambar.css";

function Bottombar() {
  return (
    <div className="Bottombar">
      <div className="types">
        <span>
          <img src={DivImage} alt="Div Logo" />
          Muddatli to'lov
        </span>
        {types.map((e) => {
          return (
            <div key={e.id}>
              <Link to="/">{e.title}</Link>
            </div>
          );
        })}
      </div>
      <select name="" id="">
        <option>Yana</option>
      </select>
    </div>
  );
}

export default Bottombar;
