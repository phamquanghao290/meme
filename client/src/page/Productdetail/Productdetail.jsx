import { AiOutlineRetweet } from "react-icons/ai";
import { Tabs } from "antd";
import { GiPoloShirt } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { BiCommentDetail } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import { AiFillDownCircle } from "react-icons/ai";
import { AiFillUpCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import products14 from "../../../public/images/product14.png";
import products15 from "../../../public/images/product15.png";
import products16 from "../../../public/images/product16.png";
import products9 from "../../../public/images/product9.png";
import products10 from "../../../public/images/product10.png";
import products11 from "../../../public/images/product11.png";
import products12 from "../../../public/images/product12.png";
import products13 from "../../../public/images/product13.png";

import "./Productsdetail.scss";
import Star from "../home/star/star";
import Heatder from "../../components/Heatder/Heatder";
import Footer from "../../components/Foodter/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export default function Productdetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const { id } = useParams();
  const onChange = (key) => {
    console.log(key);
  };
   const [product, setProduct]= useState({});

   const handleGetProduct = async () => {
     const response = await axios.get(
       `http://localhost:8080/api/product/${id}`
     );
     
     setProduct(response.data);
    
   };
  const items = [
    {
      key: "1",
      label: "Description",
      children:
        "100% Bio-washed Cotton  makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.",
    },
    {
      key: "2",
      label: "User comments",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Question & Answer",
      children: "Content of Tab Pane 3",
    },
  ];
   useEffect(() => {
     handleGetProduct();
   }, []);
  return (
    <>
      <div className="Product_detail">
        <Link to={`/product-detail/${product.id}`}>
          <div className="content_Detail">
            <div className="details">
              <AiFillUpCircle style={{ fontSize: "30px", margin: "0 auto" }} />
              <img src={products15} alt="" />
              <img
                src={products14}
                alt=""
                style={{
                  padding: "6px",
                  border: "2px solid black",
                  borderRadius: "10px",
                }}
              />
              <img src={products16} alt="" />

              <AiFillDownCircle
                style={{ fontSize: "30px", margin: "0 auto" }}
              />
            </div>
            <div className="img_detail">
              <img src={product.image} alt="" />
            </div>
            <div className="textProduct_detail">
              <h4
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                Shop <GrNext /> Women <GrNext />
                Top{" "}
              </h4>
              <h2>{product.nameProduct}</h2>
              <div className="starfeetback">
                <Star>{product.rate}</Star>
                <span>{product.rate}</span>
                <BiCommentDetail />
                <span>120 comments</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <h5>Select Size</h5>
                <p>Size Guide</p> <GrLinkNext />
              </div>

              <div className="button_Detail">
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>Xl</button>
              </div>

              <h5>Colours Available </h5>
              <div className="buttoncolor_Detail">
                <div
                  className="buttoncolor1"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid gray",
                  }}
                >
                  <button className="buttoncolor01"></button>
                </div>
                <div className="buttoncolor2">
                  <button className="buttoncolor02"></button>
                </div>
                <div className="buttoncolor3">
                  <button className="buttoncolor03"></button>
                </div>
                <div className="buttoncolor4">
                  <button className="buttoncolor04"></button>
                </div>
              </div>
              <div className="addtocart">
                <button className="buttonaddtocart">
                  <div className="flex items-center px-5 py-2 bg-[#8a33fd] rounded-lg gap-3 text-white">
                    <BsCart style={{ color: "white" }} />
                    <h6 className="border-1 font-bold text-white">
                      Add to cart
                    </h6>
                  </div>
                </button>
                <p>${product.price}</p>
              </div>

              <hr />
              <div className="payment_detail">
                <div>
                  <p>
                    <MdPayment style={{ width: "30px", height: "30px" }} />
                    Secure payment
                  </p>
                  <p>
                    <FaShippingFast style={{ width: "30px", height: "30px" }} />
                    Free shipping
                  </p>
                </div>
                <div>
                  <p>
                    {" "}
                    <GiPoloShirt style={{ width: "30px", height: "30px" }} />
                    Size & Fit
                  </p>
                  <p>
                    <AiOutlineRetweet
                      style={{ width: "30px", height: "30px" }}
                    />
                    Free Shipping & Returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="Description">
          <div className="Description_detail">
            <h2>Product Description</h2>
          </div>
          <div className="table_description_detail">
            <div className="description_detail">
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                style={{ paddingTop: "50px" }}
              />
              ;
              <div
                style={{ width: "500px", height: "300px" }}
                className="table_detail"
              >
                <div
                  style={{
                    display: "flex",
                    width: "500px",
                    height: "150px",

                    borderBottom: "2px solid gray",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      height: "150px",
                      padding: "10px 5px 10px 5px",
                      borderRight: "1px solid gray",
                    }}
                  >
                    <p>Fabric</p>
                    <h4>Bio-washed Cotton</h4>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      height: "150px",
                      padding: "10px 5px 10px 5px",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {" "}
                    <p>Pattern</p>
                    <h4>Printed</h4>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      padding: "10px 5px 10px 5px",
                      height: "150px",
                    }}
                  >
                    {" "}
                    <p>Fit</p>
                    <h4>Regular-fit</h4>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "500px",
                    height: "150px",
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      height: "150px",
                      borderRight: "1px solid gray",
                      borderTop: "1px solid gray",
                    }}
                  >
                    {" "}
                    <p>Neck</p>
                    <h4>Round Neck</h4>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      height: "150px",
                      borderRight: "1px solid gray",
                      borderTop: "1px solid gray",
                    }}
                  >
                    {" "}
                    <p>Sleeve</p>
                    <h4>Half-sleeves</h4>
                  </div>
                  <div
                    style={{
                      background: "white",
                      width: "168px",
                      height: "150px",
                      borderTop: "1px solid gray",
                    }}
                  >
                    {" "}
                    <p>Style</p>
                    <h4>Casual Wear</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="image_detail">
              <img src={products16} alt="" />
            </div>
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
                    marginLeft: "60px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "90px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "170px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "60px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
                  }}
                >
                  $119.00
                </div>
              </div>
            </div>
            <div>
              <img src={products16} alt="" />
              <div className="titleProducts">
                <div>
                  <h4>Black Sweatshirt with ....</h4> <p>Jhanvis Brand</p>
                </div>

                <div
                  style={{
                    marginLeft: "60px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "90px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "170px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
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
                    marginLeft: "60px",
                    marginTop: "10px",
                    backgroundColor: "#F6F6F6",
                    padding: "10px",
                    borderRadius: "5px",
                    height: "40px",
                  }}
                >
                  $119.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
