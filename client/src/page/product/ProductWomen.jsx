import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { ImMenu2 } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { Menu, Rate } from "antd";
import "./product.scss";
import { Select } from "antd";
import { Link } from "react-router-dom";
import { failedNoti, successNoti } from "../../utils/noti";
import { getProductsAPI } from "../../apis/products.services";
import { getAllCateAPI } from "../../apis/category.services";
import { getAllBrandAPI } from "../../apis/brand.services";
import {
  AddToWishListAPI,
  getWishListAPIID,
} from "../../apis/favorite-product.services";
import ReactLoading from "react-loading";
import { formatMoney } from "../../utils/formatMoney";

function ProductWomen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [status, setStatus] = useState(false);
  const [flag, setFlag] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const handleGetProducts = async () => {
    const res = await getProductsAPI();
    setProduct(res.data);
  };

  const handleChange = (value) => {
    if (value.value == "prices gradually increase") {
      const sortedProducts = [...product].sort((a, b) => a.price - b.price);
      setProduct(sortedProducts);
    }
    if (value.value == "prices gradually decrease") {
      const sortedProducts = [...product].sort((a, b) => b.price - a.price);
      setProduct(sortedProducts);
    }
  };

  const handleGetAllCate = async () => {
    try {
      const response = await getAllCateAPI();

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

  const handleGetBrands = async () => {
    const response = await getAllBrandAPI();
    setBrands(response.data);
  };

  const handleClick_category = (id) => {
    setSelectedCategory(id);
  };

  const handleClick_brand = (id) => {
    setSelectedBrand(id);
  };

  const handleAddToWishList = async (item) => {
    if (!userLogin) {
      failedNoti("Please login to add product to wish list");
      return;
    }
    const res = await AddToWishListAPI(userLogin.id, item.id);
    successNoti(res.data.message);
  };

  const handleGetWishlist = async () => {
    const res = await getWishListAPIID(userLogin.id);
    setFlag(!flag);
    setListProduct(res.data);
  };
  const checkWishList = (item) => {
    const check = listProduct?.some((i) => i.product.id == item.id);
    return check;
  };
  useEffect(() => {
    handleGetProducts();
  }, []);
  useEffect(() => {
    handleGetWishlist();
  }, [flag]);
  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 1100);
  }, [status]);
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
            <p
              style={{
                borderColor: `${selectedCategory == "" ? "black" : ""}`,
                borderWidth: `${selectedCategory == "" ? "2px" : "1px"}`,
                borderRadius: "5px",
              }}
              className="text-xl ml-6 flex items-center  mt-7 cursor-pointer"
              onClick={() => handleClick_category("")}
            >
              All
            </p>
            {categories.map((item) => (
              <p
                className="text-xl ml-6 flex items-center  mt-7 cursor-pointer"
                style={{
                  borderColor: `${selectedCategory == item.id ? "black" : ""}`,
                  borderWidth: `${selectedCategory == item.id ? "2px" : "1px"}`,
                  borderRadius: "5px",
                }}
                onClick={() => handleClick_category(item.id)}
              >
                {item.name_category}
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
              <p
                className="text-xl ml-6 flex items-center  mt-7 cursor-pointer"
                style={{
                  borderColor: `${selectedBrand == "" ? "black" : ""}`,
                  borderWidth: `${selectedBrand == "" ? "2px" : "1px"}`,
                  borderRadius: "5px",
                }}
                onClick={() => handleClick_brand("")}
              >
                All
              </p>
              {brands.map((item) => (
                <p
                  className="text-xl ml-6 flex items-center  mt-7 cursor-pointer"
                  style={{
                    borderColor: `${selectedBrand == item.id ? "black" : ""}`,
                    borderWidth: `${selectedBrand == item.id ? "2px" : "1px"}`,
                    borderRadius: "5px",
                  }}
                  onClick={() => handleClick_brand(item.id)}
                >
                  {item.name_brand}
                </p>
              ))}
            </div>
          </div>
        </div>
        {status ? (
          <div>
            <div className="flex items-center mt-10">
              <div className="bg-[#8A33FD] w-2 h-8 rounded-lg"></div>
              <p className="ml-6 font-bold text-xl">Products</p>
            </div>

            <div className="grid grid-cols-4 mt-10 gap-5 drop-shadow-xl">
              {product
                ?.filter(
                  (products) =>
                    products?.category?.id
                      .toString()
                      .includes(selectedCategory) &&
                    products?.brand?.id.toString().includes(selectedBrand)
                )
                .map((item, index) => (
                  <div key={index} className="rounded-lg border h-[430px]">
                    <button className="w-8 h-8 relative left-[220px] top-2 cursor-pointer">
                      {checkWishList(item) ? (
                        <AiFillHeart
                          className="text-red-500 w-7 h-7 "
                          onClick={() => handleAddToWishList(item)}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-red-500 w-7 h-7 "
                          onClick={() => handleAddToWishList(item)}
                        />
                      )}
                    </button>
                    <Link to={`/product-detail/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        className="max-w-[240px] m-auto pt-3 h-[260px] hover:scale-105 transition-all duration-300 "
                      />
                      <br />
                      <p className="text-[18px] font-bold px-3">
                        {item.name_product}
                      </p>
                      <div className="flex items-end justify-between px-3">
                        <p className="text-md line-clamp-2 font-bold">
                          {formatMoney(item.price)}
                        </p>
                        <Rate disabled defaultValue={item.rating} />
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <ReactLoading
            type={"spin"}
            color={"#525f7f"}
            height={"6%"}
            width={"6%"}
            className="m-auto pb-[450px]"
          />
        )}
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
            Casual Womens Wear Online shopping to premium quality cotton women's
            apparel, Euphoria has closet of Women Collection covered with the
            latest and best designs of Women's Clothing Online.
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
            Today, Clothing for Women is gaining more popularity above all. This
            is because gone are the days when women were used to carrying
            uncomfortable fashion. Today, a lady looks prettier when she is in
            Casual Womens Wear which is a comfortable outfit. Concerning this,
            Euphoria has a big fat range of Stylish Women's Clothing that would
            make her the winner wherever she goes.
          </p>
          <br />
          <p>
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear. It is quite
            evident to say that there are very few Womens Clothing online stores
            where you can buy Western Wear for Women comprising the premium
            material and elegant design that you are always seeking for.
            Basically,
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductWomen;
