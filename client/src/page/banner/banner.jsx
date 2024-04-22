import React from "react";
import { Carousel } from "antd";
import banner from "../../../public/images/banner.jpg";
import banner2 from "../../../public/images/banner2.jpg";
import "./banner.scss";
const contentStyle = {
  color: "black",
  height: "716px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle}  className="img_banner2">
        <img src={banner} alt="" className="img_banner" />
      </div>
      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          {" "}
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <button  className="buttonbaner">
          Shop Now
        </button>
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <img src={banner2} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <button className="buttonbaner">Shop Now</button>
      </div>
    </div>
  </Carousel>
);
export default Banner;
