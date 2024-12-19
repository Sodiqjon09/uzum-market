import React from "react";
import "./Extandle.css";
import { FaAngleRight } from "react-icons/fa6";
import { products } from "../../data/data";

function Extandle() {
  return (
    <div className="Extandle">
      <span>
        Arzon narxlar <FaAngleRight size={18} />
      </span>
      <div>
        {products.map((el) => {
          return (
            <div key={el.id} className="product">
              <img src={el.image} alt={el.name} />
              <div className="info">
                <span>{el.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Extandle;
