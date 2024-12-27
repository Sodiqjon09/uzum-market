import React from "react";
import { ReactComponent as Logo } from "../../asset/svg/Logo.svg"; // Note: Use 'ReactComponent'
import { ReactComponent as Directy } from "../../asset/svg/directy.svg";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { useLanguage } from "../../LanguageSelector";
import { languages } from "../../data/data";

function Suggestion() {
  const { language } = useLanguage();

  const currentLanguage = languages[language] || languages["uzb"];

  return (
    <div className="Suggestion">
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <div className="directy">
          <Directy />
          <span>{currentLanguage.directory}</span>
        </div>
        <div className="input">
          <input type="text" placeholder={currentLanguage.SuggestionInput} />
          <div>
            <GoSearch />
          </div>
        </div>
      </div>
      <div className="sign">
        <Link to="/login">
          <IoPersonOutline />
          <span>{currentLanguage.sign}</span>
        </Link>
        <Link to="/wishes">
          <FaRegHeart />
          <span>{currentLanguage.qualifiers}</span>
        </Link>
        <Link to="/">
          <CiShoppingBasket />
          <span>{currentLanguage.basket}</span>
        </Link>
      </div>
    </div>
  );
}

export default Suggestion;
