import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import img1 from "../../../asset/images/uzb.png";
import img2 from "../../../asset/images/russia.png";
import img3 from "../../../asset/images/united-states-of-america.png";
import { languages } from "../../../data/data";
import { useState } from "react";

function Topbar() {
  const [language, setLanguage] = useState("uzb"); // default language

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const e = languages[language];
  return (
    <div className="Topbar">
      <div className="cities">
        <li>
          <Link to="/">
            <CiLocationOn />
            {e.city}: <span>{e.Toshkent}</span>
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
        <div className="flags">
          <select
            style={{
              border: "none",
              width: "100px",
              height: "30px",
              background: "#8B8E99",
              borderRadius: "5px",
            }}
            onChange={changeLanguage}
          >
            <option
              style={{ border: "none", borderRadius: "5px" }}
              value="uzb"
            >
              O'zbekcha
            </option>
            <option value="rus">Russian</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
