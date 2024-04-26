import { AiOutlineRetweet } from "react-icons/ai";
import { Rate, Tabs } from "antd";
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
import publicAxios from "../../config/PublicAxios";

import privateAxios from "../../config/PrivateAxios";
import { failed, success } from "../../components/Modal/NotificationModal";
import { getProductsAPI, getProductsIDAPI } from "../../apis/products.services";

export default function Productdetail() {
    const [product, setProduct] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");

  const [productAll, setProductAll] = useState([]);
  const { id } = useParams();
  const onChange = (key) => {
    console.log(key);
  };

  const handleGetProducts = async () => {
    const response = await getProductsAPI();

    setProductAll(response.data);
  };

  const handleGetProduct = async () => {
    const response = await getProductsIDAPI(id);
   
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

  const handlCLickAddtoCart = async (product) => {
    if (!(userLogin && userLogin.id)) {
      failed("Cần đăng nhập để mua hàng");
      return;
    }

    const cart = {
      userId: userLogin.id,
      product,
    };
    const response = await privateAxios.post(`/api/cart/addToCart`, cart);
    success(response.data.message);
  };
  useEffect(() => {
    handleGetProduct();
    handleGetProducts();
  }, [product]);

  return (
    <>
      <div className="Product_detail">
        <div className="content_Detail">
          <div className="img_detail">
            <img src={product.image} alt="" />
          </div>
          <div className="textProduct_detail">
            <h4 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              Shop <GrNext />
              product: {product.id}
            </h4>
            <h2>{product.name_product}</h2>
            <h3>Stock : {product.stock ? product.stock : "Out of stock"}</h3>
            <hr />
            <div>
              <h3>brand : {product?.brand?.name_brand}</h3>
            </div>
            <hr />
            <div>
              <h3>style : {product?.category?.name_category}</h3>
            </div>{" "}
            <hr />
            <div className="addtocart">
              <button className="buttonaddtocart">
                <button
                  onClick={() => handlCLickAddtoCart(product)}
                  className={`btn_category_producsts ${
                    product.stock === 0 ? "disabled" : ""
                  }`}
                  disabled={product.stock === 0 ? true : false}
                >
                  <BsCart style={{ color: "white" }} />
                  <h6 className="border-1 font-bold text-white ">
                    Add to cart
                  </h6>
                </button>
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
                  <AiOutlineRetweet style={{ width: "30px", height: "30px" }} />
                  Free Shipping & Returns
                </p>
              </div>
            </div>
          </div>
        </div>

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
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>
        <div className="NewArrivalProducts">
          <h2>In The Brand</h2>

          <div className="classProducts_incategory">
            {productAll

              .filter((products) => products?.brand?.id == product?.brand?.id)

              .map((item, index) => (
                <Link to={`/product-detail/${item.id}`}>
                  <div className="Limelight max-w-[250px] m-auto pt-3 h-[60px] hover:scale-105 transition-all duration-300">
                    <img src={item.image} alt="" />
                    <div className="titleProducts">
                      <div className="nametitleProducts">
                        {" "}
                        <h4>{item.name_product}</h4>{" "}
                        <p style={{ color: "black" }}>
                          {item.brand.name_brand}
                        </p>
                      </div>
                      <div className="pricebutton">{item.price}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
