import { AiOutlineHeart } from "react-icons/ai"; 
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import logo from "../../../public/image/Logo.png";
import search from "../../../public/image/search.png";
import React from "react";
import "./Heatder.scss";
export default function Heatder() {
  return (
    <>
      <div className="Heatder">
        <div className="Logo_Heatder">
          <img src={logo} alt="" />
        </div>
        <div className="Menu_Heatder">
          <h3>Shop</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Combos</h3>
          <h3>Joggers</h3>
        </div>
        <div className="Search_Heatder">
          <div>
            <img src={search} alt="" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        <div className="Icon_Heatder">
          <div className="component">
            <AiOutlineHeart className="icon" />
          </div>
          <div className="component">
            <AiOutlineUser className="icon" />
          </div>
          <div className="component">
            <BsCart className="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
