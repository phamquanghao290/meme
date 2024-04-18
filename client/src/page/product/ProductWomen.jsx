import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { ImMenu2 } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { Slider, Switch } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import publicAxios from "../../config/PublicAxios";
import { Menu, Rate } from "antd";
import "./product.scss";
import anh1 from "../../../public/images/product13.png";
import { Select } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { successNoti } from "../../utils/noti";
function ProductWomen() {
  const [product, setProduct] = useState([]);
  const handleGetProducts = async () => {
    const response = await publicAxios.get("/api/product");

    setProduct(response.data);
  }

  useEffect(() => {
    handleGetProducts();
    window.scrollTo(0, 0);
  }, []);
 
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
 

 
  const [categories, setCategories] = React.useState([]);
  const handleGetAllCate = async () => {
    try {
      const response = await publicAxios.get("/api/category");
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    document.title = "Danh mục";
    handleGetAllCate();
    handleGetBrands();
  }, []);
      const [brands, setBrands] = React.useState([]);
    const handleGetBrands = async () => {
      const response = await publicAxios.get("/api/brand");
      setBrands(response.data);
  };
 
    return (
      <div style={{ marginTop: "50px", fontFamily: "Montserrat" }}>
        <div className="flex items-start justify-between gap-11 max-w-[1485px] w-full mx-auto px-4 mb-10 sm:px-6 lg:px-8">
          <div className="w-[300px] p-4 border rounded-xl">
            <h3 className="font-bold text-xl ml-6 flex items-center ">
              Fillter <ImMenu2 className="ml-[170px]" />
            </h3>
            <hr className="mt-6" />
            <div>
              <h4 className="ml-6 mt-7 text-xl font-bold ">Category</h4>
              {categories.map((item) => (
                <p className="text-xl ml-6 flex items-center  mt-7">
                  {item.nameCategory}
                </p>
              ))}
              
              <div>
                <h4 className="ml-6 mt-7 text-xl font-bold ">Prices</h4>
                <Select
                  className="ml-6 mt-7"
                  labelInValue
                  defaultValue={{
                    value: "prices gradually increase",
                    label: "prices",
                  }}
                  style={{
                    width: 240,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "prices gradually decrease",
                      label: "prices gradually decrease",
                    },
                    {
                      value: "prices gradually increase",
                      label: "prices gradually increase",
                    },
                  ]}
                />
              </div>
           
              <div>
                <h4 className="ml-6 mt-7 text-xl font-bold ">Brand</h4>
                {brands.map((item) => (
                  <p className="text-xl ml-6 flex items-center  mt-7">
                    {item.nameBrand}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mt-10">
              <div className="bg-[#8A33FD] w-2 h-8 rounded-lg"></div>
              <p className="ml-6 font-bold text-xl">Products Clothing</p>
            </div>
            <div className="grid grid-cols-4 mt-10 gap-5 drop-shadow-xl">
              {product.map((item, index) => (
                <div key={index} className="rounded-lg border h-[400px]">
                  <Link to={`/product-detail/${item.id}`}>
                    <img src={item.image} alt="" className="max-w-[220px] m-auto pt-3 h-[260px] hover:scale-105 transition-all duration-300 " />
                  
                    {/* <AiFillHeart /> */}
                    <button className="w-8 h-8  relative bottom-[250px] left-[200px]">
                      <AiOutlineHeart className="text-red-500 w-7 h-7 " />
                    </button>
                    <br />
                    <p className="text-[18px] font-bold px-3">{item.nameProduct}</p>
                    <div className="flex items-end justify-between px-3">
                      <p className="text-md line-clamp-2 font-bold">{item.price}</p>
                      <Rate disabled defaultValue={item.rate} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </div>
      <div className="Product_Content" style={{ paddingBottom: "100px" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#8A33FD",
              width: "7px",
              height: "30px",
              borderRadius: "7px",
            }}
          ></div>
          <h2>Clothing for Women Online in India</h2>
          <br />
        </div>
        <br />
        <div>
          <h4>Reexplore Women's Clothing Collection Online at Euphoria</h4>
          <br />
          <p>
            Women's Clothing – Are you searching for the best website to buy
            Clothing for Women online in India? Well, your search for the
            coolest and most stylish womens clothing ends here. From trendy
            Casual Womens Wear Online shopping to premium quality cotton
            women's apparel, Euphoria has closet of Women Collection covered
            with the latest and best designs of Women's Clothing Online.
          </p>
          <br />
          <p>
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear.
          </p>
          <br />
          <h4>
            One-Stop Destination to Shop Every Clothing for Women: Euphoria
          </h4>
          <br />
          <p>
            Today, Clothing for Women is gaining more popularity above all.
            This is because gone are the days when women were used to carrying
            uncomfortable fashion. Today, a lady looks prettier when she is in
            Casual Womens Wear which is a comfortable outfit. Concerning this,
            Euphoria has a big fat range of Stylish Women's Clothing that
            would make her the winner wherever she goes.
          </p>
          <br />
          <p>
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear. It is quite
            evident to say that there are very few Womens Clothing online
            stores where you can buy Western Wear for Women comprising the
            premium material and elegant design that you are always seeking
            for. Basically,
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductWomen;
