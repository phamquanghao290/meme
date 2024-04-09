import React from "react";
import { Carousel } from "antd";
import banner from "../../../public/image/banner.jpg";
import "../banner/banner.scss";
const contentStyle = {
  color: "black",
  height: "716px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <div style={contentStyle}>
        <img src={banner} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          zIndex: 90000,
          height: "10px",
          top: "-640px",
          fontSize: "60px",
          color: "white",
        }}
      >
        <p
          style={{
            fontWeight: "normal",
            marginLeft: "120px",
            fontSize: "40px",
          }}
        >
          T-shirt / Tops
        </p>
        <p style={{ fontWeight: "bold", marginLeft: "120px" }}>
          {" "}
          Summer <br /> Value Pack
        </p>
        <p
          style={{
            fontWeight: "normal",
            marginLeft: "120px",
            fontSize: "40px",
          }}
        >
          cool / colorful / comfy
        </p>
        <button style={{ marginLeft: "140px" }} className="buttonbaner">
          Shop Now
        </button>
      </div>
    </div>

    <div>
      <div style={contentStyle}>
        <img src={banner} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

      <div
        style={{
          width: "100%",
          position: "relative",
          zIndex: 90000,
          height: "10px",
          top: "-640px",
          fontSize: "60px",
          color: "white",
        }}
      >
        <p
          style={{
            fontWeight: "normal",
            marginLeft: "120px",
            fontSize: "40px",
          }}
        >
          T-shirt / Tops
        </p>
        <p style={{ fontWeight: "bold", marginLeft: "120px" }}>
          Summer <br /> Value Pack
        </p>
        <p
          style={{
            fontWeight: "normal",
            marginLeft: "120px",
            fontSize: "40px",
            color: "#ffff",
          }}
        >
          cool / colorful / comfy
        </p>
        <button className="buttonbaner" style={{ marginLeft: "140px" }}>
          Shop Now
        </button>
      </div>
    </div>
  </Carousel>
);
export default Banner;
