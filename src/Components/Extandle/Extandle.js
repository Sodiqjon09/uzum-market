import React, { useState } from "react";
import "./Extandle.css";
import { FaAngleRight } from "react-icons/fa6";
import { LowPrices } from "../../data/data";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

function Extandle() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  return (
    <div className="Extandle">
      <span>
        Arzon narxlar <FaAngleRight size={18} />
      </span>
      <div className="LowPrices">
        {LowPrices.map((e) => {
          const isLiked = likes[e.id];
          return (
            <div key={e.id} className="goods">
              <img className="image" src={e.img} alt={e.title} />
              <div className="like">
                {!isLiked && <CiHeart onClick={() => toggleLike(e.id)} />}
                {isLiked && (
                  <FaHeart color="7f4dff" onClick={() => toggleLike(e.id)} />
                )}
              </div>

              <span id="title">{e.title}</span>
              <span id="star">
                {e.starIcon} {e.starText}
              </span>
              <span id="credit">{e.credit}</span>
              <div className="product">
                <div className="price">
                  <span id="fake-price">{e.fakePrice}</span>
                  <span id="actual-price">{e.price}</span>
                </div>
                <div className="image">
                  <img src={e.divSlot} alt="Product image" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Extandle;
