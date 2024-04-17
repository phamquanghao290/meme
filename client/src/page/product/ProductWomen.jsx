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
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  const items = [
    getItem("Dress Style", "1", <MailOutlined />, [
      getItem("Classic", "11"),
      getItem("Casual", "12"),
      getItem("Business", "13"),
      getItem("Sport", "14"),
    ]),
    getItem("Size", "2", <AppstoreOutlined />, [
      getItem(
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginBottom: "10px",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <p>XS</p>
          <p>S</p>
          <p>M</p>
          <p>L</p>
          <p>XL</p>
          <p>XXL</p>
        </div>
      ),
      "21",
    ]),
    getItem("Price", "3", <SettingOutlined />, [
      getItem(<Slider range defaultValue={[20, 50]} />, "31"),
    ]),
  ];

  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          return func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex(
          (key) => levelKeys[key] === levelKeys[currentOpenKey]
        );
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter(
            (key) => levelKeys[key] <= levelKeys[currentOpenKey]
          )
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const userLogin = JSON.parse(localStorage.getItem("userLogin"))
  const handleAddToWishList = async (item) => {
    console.log(item)
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/favorite-product/${userLogin?.id}`, item)
      successNoti(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{ marginTop: "50px", fontFamily: "Montserrat" }}>
      <div className="flex items-start justify-between gap-11 max-w-[1440px] w-full mx-auto px-4 mb-10 sm:px-6 lg:px-8">
        <div>
          <h3 className="font-bold text-xl ml-6 flex items-center ">
            Fillter <ImMenu2 className="ml-[170px]" />
          </h3>
          <hr className="mt-6" />
          <div>
            <h4 className="ml-6 mt-7 text-xl font-bold ">Category</h4>
            <p className="text-xl ml-6 flex items-center  mt-7">
              vffdddfsdsdf
            </p>
            <p className="text-xl ml-6 flex items-center  mt-7">
              vffdddfsdsdf
            </p>
            <p className="text-xl ml-6 flex items-center  mt-7">
              {" "}
              vffdddfsdsdf
            </p>
            <p className="text-xl ml-6 flex items-center  mt-7">
              vffdddfsdsdf
            </p>
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
              <h4 className="ml-6 mt-7 text-xl font-bold ">Size</h4>
              <div className="flex items-center gap-6 ml-6 mt-7">
                <button
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid gray",
                  }}
                  className="w-8 h-8 rounded-lg"
                >
                  XS
                </button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>Xl</button>
              </div>
            </div>
            <div>
              <h4 className="ml-6 mt-7 text-xl font-bold ">Color</h4>
              <Select
                className="ml-6 mt-7"
                labelInValue
                defaultValue={{
                  value: "red",
                  label: "color",
                }}
                style={{
                  width: 240,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "red",
                    label: "red",
                    style: {
                      color: "red",
                      backgroundColor: "red",
                    },
                  },
                  {
                    value: "blue",
                    label: "blue",
                    style: {
                      color: "blue",
                      backgroundColor: "blue",
                    },
                  },
                  {
                    value: "gray",
                    label: "gray",
                    style: {
                      color: "gray",
                      backgroundColor: "gray",
                    },
                  },
                  {
                    value: "Yellow",
                    label: "Yellow",
                    style: {
                      color: "#edd146",
                      backgroundColor: "#edd146",
                    },
                  },
                ]}
              />
            </div>
            <div>
              <h4 className="ml-6 mt-7 text-xl font-bold ">Brand</h4>
              <p className="text-xl ml-6 flex items-center  mt-7">
                vffdddfsdsdf
              </p>
              <p className="text-xl ml-6 flex items-center  mt-7">
                vffdddfsdsdf
              </p>
              <p className="text-xl ml-6 flex items-center  mt-7">
                {" "}
                vffdddfsdsdf
              </p>
              <p className="text-xl ml-6 flex items-center  mt-7">
                vffdddfsdsdf
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mt-10">
            <div className="bg-[#8A33FD] w-2 h-8 rounded-lg"></div>
            <p className="ml-6 font-bold text-xl">Women's Clothing</p>
          </div>
          <div className="grid grid-cols-4 mt-10 gap-10">
            {product.map((item, index) => (
              <div key={index}>
                <button className="w-8 h-8 relative top-10 left-[200px]" onClick={() => handleAddToWishList(item)}>
                  <AiOutlineHeart className="text-red-500 w-7 h-7 " />
                </button>
                <Link to={`/product-detail/${item.id}`}>
                  <img src={item.image} alt="" />
                  {/* <AiFillHeart /> */}
                  <br />
                  <div className="flex gap-10">
                    <p className="text-lg font-bold">{item.nameProduct}</p>

                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-lg font-bold">{item.price}</p>
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
