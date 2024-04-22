import React from "react";
import { Carousel } from "antd";
import banner from "../../../public/images/banner.jpg";
import "./banner.scss";
import { Link, useNavigate } from "react-router-dom";
const contentStyle = {
  color: "black",
  height: "716px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle} className="img_banner2">
        <img src={banner} alt="" className="img_banner" />
      </div>
      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          {" "}
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <Link to="/product-women">
          <button className="buttonbaner">Shop Now</button>
        </Link>{" "}
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <img src={banner} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <Link to="/product-women">
          <button className="buttonbaner">Shop Now</button>
        </Link>{" "}
      </div>
    </div>
  </Carousel>
);
export default Banner;
