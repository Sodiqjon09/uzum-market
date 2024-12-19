import React from "react";
import "./Extandle.css";
import { FaAngleRight } from "react-icons/fa6";
import { LowPrices } from "../../data/data";

function Extandle() {
  return (
    <div className="Extandle">
      <span>
        Arzon narxlar <FaAngleRight size={18} />
      </span>
      <div className="LowPrices">
        {LowPrices.map((e) => {
          return (
            <div key={e.id} className="goods">
              <img className="image" src={e.img} alt={e.title} />
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
