import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageSelector"; // Use language context
import { languages } from "../../data/data"; // Import language data

function Topbar() {
  const { language, changeLanguage } = useLanguage(); // Get current language
  const selectStyle = {
    border: "none",
    width: "auto",
    height: "32px",
    background: "none",
    borderRadius: "5px",
  };

  const currentLanguage = languages[language] || languages["uzb"];

  return (
    <div className="Topbar">
      <div className="cities">
        <li>
          <Link to="/">
            <CiLocationOn />
            {currentLanguage.city}: <span>{currentLanguage.Toshkent}</span>
          </Link>
        </li>
        <li>
          <Link to="/">{currentLanguage.DeliveryPoints}lari</Link>
        </li>
      </div>
      <div className="day">
        <span>{currentLanguage.topText}</span>
      </div>
      <div className="top-links">
        <li>
          <Link to="/">{currentLanguage.topQuestion}</Link>
        </li>
        <li>
          <Link to="/">{currentLanguage.topOrder}</Link>
        </li>
        <div className="flags">
          <select
            style={selectStyle}
            onChange={(e) => changeLanguage(e.target.value)} // Change language
            value={language}
          >
            <option value="eng">English</option>
            <option value="uzb">O'zbekcha</option>
            <option value="rus">Русский</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
