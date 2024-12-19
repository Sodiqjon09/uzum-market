import React from "react";
import { ReactComponent as Logo } from "../../../asset/svg/Logo.svg"; // Note: Use 'ReactComponent'
import { ReactComponent as Directy } from "../../../asset/svg/directy.svg";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
function Suggestion() {
  return (
    <div className="Suggestion">
      <div className="logo">
        <Logo />
      </div>
      <div className="search">
        <div className="directy">
          <Directy />
          <span>Katalog</span>
        </div>
        <div className="input">
          <input type="text" placeholder="Mahsulotlar va turkumlar izlash" />
          <div>
            <GoSearch />
          </div>
        </div>
      </div>
      <div className="sign">
        <Link to="/login">
          <IoPersonOutline />
          <span>Kirish</span>
        </Link>
        <Link to="/">
          <FaRegHeart />
          <span>Saralangan</span>
        </Link>
        <Link to="/">
          <CiShoppingBasket />
          <span>Savat</span>
        </Link>
      </div>
    </div>
  );
}

export default Suggestion;
