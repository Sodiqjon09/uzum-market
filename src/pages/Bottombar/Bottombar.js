import React from "react";
import DivImage from "../../asset/images/div.image.png";
import { languages, types } from "../../data/data";
import { Link } from "react-router-dom";
import "./Bottambar.css";
import { useLanguage } from "../../LanguageSelector";

function Bottombar() {
  const { language } = useLanguage();

  const currentLanguage = languages[language || languages["uzb"]];
  return (
    <div className="Bottombar">
      <div className="types">
        <span>
          <img src={DivImage} alt="Div Logo" />
          {currentLanguage.InstallmentPayment}
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
        <option>{currentLanguage.again}</option>
      </select>
    </div>
  );
}

export default Bottombar;
