import { BiDownArrowAlt } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import React from "react";
import Banner from "../banner/banner";
import Banner3 from "../../../public/image/banner3.png";
import Banner4 from "../../../public/image/banner4.png";
import img1 from "../../../public/image/img1.png";
import img2 from "../../../public/image/img2.png";

import img3 from "../../../public/image/img3.png";
import img4 from "../../../public/image/img4.png";
import img5 from "../../../public/image/banner5.png";
import img6 from "../../../public/image/banner6.png";
import img7 from "../../../public/image/banner7.png";
import img8 from "../../../public/image/banner8.png";
import img9 from "../../../public/image/banner9.png";
import img10 from "../../../public/image/banner10.png";
import img11 from "../../../public/image/banner11.png";
import products1 from "../../../public/image/product1.png";
import products2 from "../../../public/image/product2.png";
import products3 from "../../../public/image/product3.png";
import products4 from "../../../public/image/product4.png";
import products5 from "../../../public/image/product5.png";
import products6 from "../../../public/image/product6.png";
import products7 from "../../../public/image/product7.png";
import products8 from "../../../public/image/product8.png";
import products9 from "../../../public/image/product9.png";
import products10 from "../../../public/image/product10.png";
import products11 from "../../../public/image/product11.png";
import products12 from "../../../public/image/product12.png";
import products13 from "../../../public/image/product13.png";
import products14 from "../../../public/image/product14.png";
import products15 from "../../../public/image/product15.png";
import products16 from "../../../public/image/product16.png";
import people1 from "../../../public/image/imgpeople1.png";
import people2 from "../../../public/image/imgpeople2.png";
import people3 from "../../../public/image/imgpeople3.png";

import Logo1 from "../../../public/image/Logo1.png";
import Logo2 from "../../../public/image/Logo2.png";
import Logo3 from "../../../public/image/Logo3.png";
import Logo4 from "../../../public/image/Logo4.png";
import Logo5 from "../../../public/image/Logo5.png";

import "../home/Index.scss";
import Star from "./star/star";
export default function Index() {
  return (
    <>
      <Banner></Banner>

      <div className="bannertitle">
        <div>
          <img src={Banner4} alt="" />
        </div>
        <div>
          <img src={Banner3} alt="" />
        </div>
      </div>

      <div className="NewArrival">
        <h2>New Arrival</h2>
        <div className="productsNewArrival">
          <GrLinkPrevious style={{ marginTop: "140px" }} />
          <div>
            <img src={img1} alt="" />
            <p>Knitted Joggers</p>
          </div>
          <div>
            <img src={img2} alt="" />
            <p>Full Sleeve</p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p>Active T-Shirts</p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>Urban Shirts</p>
          </div>
          <GrLinkNext style={{ marginTop: "140px" }} />
        </div>
      </div>
      <div className="NewArrival">
        <h2>Big Saving Zone</h2>
        <div className="productsNewArrival">
          <div>
            <div>
              <img src={img5} alt="" />
            </div>
            <div className="textimg">
              <h3>
                Hawaiian <br /> Shirts
              </h3>
              <p>Dress up in summer vibe</p>
              <p>UPTO 50% OFF</p>
              <BiDownArrowAlt className="icon" />
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={img6} alt="" />
            </div>
            <div className="textimg2">
              <h3>
                Printed <br /> T-Shirt
              </h3>
              <p>New Designs Every Week</p>
              <p>UPTO 40% OFF</p>
              <BiDownArrowAlt className="icon" />
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={img7} alt="" />
            </div>
            <div className="textimg3">
              <h3>
                Cargo <br />
                Joggers
              </h3>
              <p>Move with style & comfort</p>
              <p>UPTO 50% OFF</p>
              <BiDownArrowAlt className="icon" />
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="BigSavingZone">
          <div>
            <div>
              <img src={img9} alt="" />
            </div>
            <div className="textimg4">
              <h3>
                Urban <br />
                Shirts
              </h3>
              <p>Live In Confort</p>
              <p>FLAT 60% OFF</p>
              <BiDownArrowAlt className="icon" />
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={img8} alt="" />
            </div>
            <div className="textimg4">
              <h3>
                Oversized <br />
                T-Shirts
              </h3>
              <p>Street Style Icon</p>
              <p>FLAT 60% OFF</p>
              <BiDownArrowAlt className="icon" />
              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "150px", width: "1300px", display: "flex" }}>
          <div>
            <div>
              <img src={img10} alt="" />
            </div>
            <div className="textimgshownow">
              <h3>
                WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
              </h3>
              <p>
                In our journey to improve everyday fashion, <br />
                euphoria presents EVERYDAY wear range <br />- Comfortable &
                Affordable fashion 24/7
              </p>

              <div>
                <button>Shop Now</button>
              </div>
            </div>
          </div>

          <img src={img11} alt="" style={{ height: "640px", width: "660px" }} />
        </div>
      </div>
      <div className="NewArrivalProducts">
        <h2>Categories For Men</h2>
        <div className="productshome">
          <div>
            <img src={products1} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Shirts</h4> <p>Explore Now!</p>
              </div>

              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products2} alt="" />{" "}
            <div className="titleProducts">
              <div>
                {" "}
                <h4>Printed T-Shirts</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products3} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Plain T-Shirt</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products4} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Polo T-Shirt</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products5} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Hoodies Sweetshirt</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products6} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Jeans</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products7} alt="" />{" "}
            <div className="titleProducts">
              <div>
                {" "}
                <h4>Activewear</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products8} alt="" />{" "}
            <div className="titleProducts">
              {" "}
              <div>
                <h4>Boxers</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="NewArrivalProducts">
        <h2>Categories For Women</h2>
        <div className="productshome">
          <div>
            <img src={products9} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Hoodies Sweetshirt</h4> <p>Explore Now!</p>
              </div>

              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products10} alt="" />{" "}
            <div className="titleProducts">
              <div>
                {" "}
                <h4>Coats & Parkas</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products11} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Tees & T-Shirt</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={products12} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Boxers</h4> <p>Explore Now!</p>
              </div>
              <div>
                {" "}
                <GrLinkNext
                  style={{ marginLeft: "160px", marginTop: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#3C4242",
          width: "1280px",
          height: "357px",
          marginLeft: "200px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <h2
          style={{ paddingTop: "40px", fontSize: "60px", textAlign: "center" }}
        >
          Top Brands Deal
        </h2>
        <p style={{ textAlign: "center", fontSize: "25px" }}>
          Up To <span style={{ color: "#FBD103" }}>60%</span> off on brands
        </p>
        <div
          style={{ margin: "0 auto", marginLeft: "230px", marginTop: "50px" }}
        >
          <img src={Logo1} alt="" />
          <img
            src={Logo2}
            alt=""
            style={{
              marginLeft: "20px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "15px",
              width: "125px",
            }}
          />
          <img
            src={Logo3}
            alt=""
            style={{
              marginLeft: "20px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "15px",
              width: "125px",
              height: "70px",
            }}
          />
          <img
            src={Logo5}
            alt=""
            style={{
              marginLeft: "20px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "15px",
              width: "125px",
              height: "70px",
            }}
          />
          <img
            src={Logo4}
            alt=""
            style={{
              marginLeft: "20px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "15px",
              width: "125px",
              height: "70px",
            }}
          />
        </div>
      </div>
      <div className="NewArrivalProducts">
        <h2>In The Limelight</h2>
        <div className="productshome">
          <div>
            <img src={products16} alt="" />
            <div className="titleProducts">
              <div>
                <h4>Black Sweatshirt with ....</h4> <p>Jhanvis Brand</p>
              </div>

              <div
                style={{
                  marginLeft: "40px",
                  marginTop: "40px",
                  backgroundColor: "#F6F6F6",
                  padding: "10px",
                  borderRadius: "5px",
                  height: "20px",
                }}
              >
                $123.00
              </div>
            </div>
          </div>
          <div>
            <img src={products15} alt="" />
            <div className="titleProducts">
              <div>
                {" "}
                <h4>line Pattern Black H...</h4> <p>ASs Brand</p>
              </div>
              <div
                style={{
                  marginLeft: "70px",
                  marginTop: "40px",
                  backgroundColor: "#F6F6F6",
                  padding: "10px",
                  borderRadius: "5px",
                  height: "20px",
                }}
              >
                $37.00
              </div>
            </div>
          </div>
          <div>
            <img src={products14} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Black Shorts</h4> <p>MMs Brand</p>
              </div>
              <div
                style={{
                  marginLeft: "130px",
                  marginTop: "40px",
                  backgroundColor: "#F6F6F6",
                  padding: "10px",
                  borderRadius: "5px",
                  height: "20px",
                }}
              >
                $37.00
              </div>
            </div>
          </div>
          <div>
            <img src={products13} alt="" />{" "}
            <div className="titleProducts">
              <div>
                <h4>Levender Hoodie with ....</h4> <p>Nikes Brand</p>
              </div>
              <div
                style={{
                  marginLeft: "40px",
                  marginTop: "40px",
                  backgroundColor: "#F6F6F6",
                  padding: "10px",
                  borderRadius: "5px",
                  height: "20px",
                }}
              >
                $119.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <h2>Feedback</h2>
        <div className=" feedbackpeople">
          <div className="people">
            <div style={{ display: "flex", gap: "160px", marginTop: "20px" }}>
              <img src={people1} alt="" />

              <Star></Star>
            </div>

            <h3>Floyd Miles</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
          <div className="people">
            <div style={{ display: "flex", gap: "160px", marginTop: "20px" }}>
              <img src={people2} alt="" />
              <Star></Star>
            </div>

            <h3>Ronald Richards</h3>
            <p>
              {" "}
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet
            </p>
          </div>
          <div className="people">
            <div style={{ display: "flex", gap: "160px", marginTop: "20px" }}>
              <img src={people3} alt="" />
              <Star></Star>
            </div>

            <h3>Savannah Nguyen</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
