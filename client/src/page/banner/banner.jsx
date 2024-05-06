import React from "react";
import { Carousel } from "antd";
import banner from "../../../public/images/banner.jpg";
import banner2 from "../../../public/images/banner2.jpg";
import banner3 from "../../../public/images/addidas/originals_fw24_adicolor_lavender_glpm_mh_d_dc0e51ca90.avif";
import banner4 from "../../../public/images/Aristino/online_1920x900.png";
import "./banner.scss";
import { Link, useNavigate } from "react-router-dom";
const contentStyle = {
  color: "black",
  height: "716px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => (
  <Carousel autoplay className="textBanner_Container">
    <div>
      <div style={contentStyle} className="img_banner2">
        <img src={banner4} alt="" className="img_banner" />
      </div>
      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          {" "}
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <Link to="/product-man">
          <button className="buttonbaner">Shop Now</button>
        </Link>{" "}
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <img src={banner3} alt="" className="img_banner" />
      </div>

      <div className="textBanner_css">
        <p>T-shirt / Tops</p>
        <h4>
          Summer <br /> Value Pack
        </h4>
        <p>cool / colorful / comfy</p>
        <Link to="/product-man">
          <button className="buttonbaner">Shop Now</button>
        </Link>{" "}
      </div>
    </div>
  </Carousel>
);
export default Banner;
