import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiFlag1 } from "react-icons/ci";

function Topbar() {
  return (
    <div className="Topbar">
      <div className="cities">
        <li>
          <Link to="/">
            <CiLocationOn />
            Shahar: <span>Toshkent</span>
          </Link>
        </li>
        <li>
          <Link to="/">Topshirish punktlari</Link>
        </li>
      </div>
      <div className="day">
        <span>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</span>
      </div>
      <div className="top-links">
        <li>
          <Link to="/">Savol-javoblar</Link>
        </li>
        <li>
          <Link to="/">Buyurtmalarim</Link>
        </li>
        <span>
          <CiFlag1 />
          O'zbekcha
        </span>
      </div>
    </div>
  );
}

export default Topbar;
