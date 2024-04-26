import { BiDownArrowAlt } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import Banner from "../banner/banner";
import Banner3 from "../../../public/images/banner3.png";
import Banner4 from "../../../public/images/banner4.png";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";

import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import img5 from "../../../public/images/banner5.png";
import img6 from "../../../public/images/banner6.png";
import img7 from "../../../public/images/banner7.png";
import img8 from "../../../public/images/banner8.png";
import img9 from "../../../public/images/banner9.png";
import img10 from "../../../public/images/banner10.png";
import img11 from "../../../public/images/banner11.png";
import products1 from "../../../public/images/product1.png";
import products2 from "../../../public/images/product2.png";
import products3 from "../../../public/images/product3.png";
import products4 from "../../../public/images/product4.png";
import products5 from "../../../public/images/product5.png";
import products6 from "../../../public/images/product6.png";
import products7 from "../../../public/images/product7.png";
import products8 from "../../../public/images/product8.png";
import products9 from "../../../public/images/product9.png";
import products10 from "../../../public/images/product10.png";
import products11 from "../../../public/images/product11.png";
import products12 from "../../../public/images/product12.png";
import products13 from "../../../public/images/product13.png";
import products14 from "../../../public/images/product14.png";
import products15 from "../../../public/images/product15.png";
import products16 from "../../../public/images/product16.png";
import people1 from "../../../public/images/imgpeople1.png";
import people2 from "../../../public/images/imgpeople2.png";
import people3 from "../../../public/images/imgpeople3.png";

import Logo1 from "../../../public/images/Logo1.png";
import Logo2 from "../../../public/images/Logo2.png";
import Logo3 from "../../../public/images/Logo3.png";
import Logo4 from "../../../public/images/Logo4.png";
import Logo5 from "../../../public/images/Logo5.png";

import "../home/Index.scss";
import Star from "./star/star";
import { Link } from "react-router-dom";
import publicAxios from "../../config/PublicAxios";
export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = React.useState([]);
  const handleGetProducts = async () => {
    const response = await publicAxios.get("/api/product");

    setProduct(response.data);
  };
  useEffect(() => {
    handleGetProducts();
    handleGetAllCate();
  }, []);
  const topFourProducts = product.sort((a, b) => b.id - a.id).slice(0, 4);
  
   
  const sortedProducts = product.sort((a, b) => a.stock - b.stock);
  const lowestStockProducts = sortedProducts.slice(0, 4);
  const handleGetAllCate = async () => {
    try {
      const response = await publicAxios.get("/api/category");

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Banner></Banner>
      <div>
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
            {topFourProducts.map((item, index) => (
              <>
                <div>
                  <img src={item.image} alt="" />
                  <p>{item.name_product}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="NewArrivals">
          <h2>Big Saving Zone</h2>
          <div className="productsNewArrivals">
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
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
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
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
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
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="BigSavingZone">
            <div>
              <div>
                <img src={img9} alt="" className="img_shownow1" />
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
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={img8} alt="" className="img_shownow2" />
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
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="img_shownow" style={{ height: "735px" }}>
            <div>
              <div>
                <img
                  src={img10}
                  alt=""
                  height="100%"
                  width="100%"
                  className="img_shownowsasss"
                />
              </div>
              <div className="textimgshownow">
                <h3 style={{ color: "white" }}>
                  WE MADE YOUR EVERYDAY <br /> FASHION BETTER!
                </h3>
                <p>
                  In our journey to improve everyday fashion, <br />
                  euphoria presents EVERYDAY wear range <br />- Comfortable &
                  Affordable fashion 24/7
                </p>

                <div>
                  <Link to="/product-women">
                    <button>Shop Now</button>
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="img_shownow_2">
              <img src={img11} alt="" />
            </div>
          </div>
        </div>
        <div className="NewArrivalProducts">
          {categories
            ?.filter((categories) => categories.id == 2)
            .map((categories) => (
              <h2>{categories.name_category}</h2>
            ))}

          <div className="products_Categoryid">
            {product
              ?.filter((products) => products.category.id == 2)
              .slice(0, 4)
              .map((product) => (
                <div>
                  <img src={product.image} alt="" />{" "}
                  <div className="titleProducts">
                    <div>
                      <h4>{product.name_product}</h4>{" "}
                      <p>{product.brand.name_brand}</p>
                    </div>

                    <div>
                      {" "}
                      <Link to={`/product-detail/${product.id}`}>
                        <GrLinkNext
                          style={{ marginLeft: "20px", marginTop: "22px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="NewArrivalProducts">
          {categories
            ?.filter((categories) => categories.id == 3)

            .map((categories) => (
              <h2>{categories.name_category}</h2>
            ))}

          <div className="products_Categoryid">
            {product
              ?.filter((products) => products.category.id == 3)
              .slice(0, 4)
              .map((product) => (
                <div>
                  <img src={product.image} alt="" />{" "}
                  <div className="titleProducts">
                    <div>
                      <h4>{product.name_product}</h4>{" "}
                      <p>{product.brand.name_brand}</p>
                    </div>

                    <div>
                      {" "}
                      <Link to={`/product-detail/${product.id}`}>
                        <GrLinkNext
                          style={{ marginLeft: "20px", marginTop: "22px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="NewArrivalProducts">
          {categories
            ?.filter((categories) => categories.id == 1)
            .map((categories) => (
              <h2>{categories.name_category}</h2>
            ))}

          <div className="products_Categoryid">
            {product
              ?.filter((products) => products.category.id == 1)
              .slice(0, 4)
              .map((product) => (
                <div>
                  <img src={product.image} alt="" />{" "}
                  <div className="titleProducts">
                    <div>
                      <h4>{product.name_product}</h4>{" "}
                      <p>{product.brand.name_brand}</p>
                    </div>

                    <div>
                      {" "}
                      <Link to={`/product-detail/${product.id}`}>
                        <GrLinkNext
                          style={{ marginLeft: "20px", marginTop: "22px" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="bannerTopbrands">
          <h2
            style={{
              paddingTop: "40px",
              fontSize: "60px",
              textAlign: "center",
              color: "white",
            }}
          >
            Top Brands Deal
          </h2>
          <p style={{ textAlign: "center", fontSize: "25px" }}>
            Up To <span style={{ color: "#FBD103" }}>60%</span> off on brands
          </p>
          <div
            style={{
              margin: "0 auto",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="logo_topbrand"
          >
            <img src={Logo1} alt="" style={{ width: "155px" }} />
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
                width: "135px",
                height: "80px",
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
                width: "135px",
                height: "80px",
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
                width: "135px",
                height: "80px",
              }}
            />
          </div>
        </div>
        <div className="NewArrivalProducts">
          <h2>In The Limelight</h2>
          <div className="products_Categoryid">
            {lowestStockProducts.map((product) => (
              <div>
                <Link to={`/product-detail/${product.id}`}>
                  <img
                    src={product.image}
                    alt=""
                    className="max-w-[280px] m-auto  hover:scale-105 transition-all duration-300 "
                  />
                  <div className="titleProducts">
                    <div>
                      <h4>{product.name_product}</h4>{" "}
                      <p style={{ color: "black" }}>
                        {product.brand.name_brand}
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#F6F6F6",
                        padding: "10px",
                        borderRadius: "5px",
                        height: "40px",
                      }}
                    >
                      ${product.price}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="feedback">
          <div className="feedbacktitle">
            <h2>Feedback</h2>
          </div>

          <div className=" feedbackpeople">
            <div className="people">
              <div className="feedbackstar">
                <img src={people1} alt="" />

                <Star></Star>
              </div>

              <h3>Floyd Miles</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.{" "}
                <br /> Exercitation veniam consequat sunt nostrud amet. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="people">
              <div className="feedbackstar">
                <img src={people2} alt="" />
                <Star></Star>
              </div>

              <h3>Ronald Richards</h3>
              <p>
                {" "}
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet
              </p>
            </div>
            <div className="people">
              <div className="feedbackstar">
                <img src={people3} alt="" />
                <Star></Star>
              </div>

              <h3>Savannah Nguyen</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.{" "}
                <br /> Exercitation veniam consequat sunt nostrud amet. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
