import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Menu, Rate } from "antd";
import "../product/product.scss";
import { Link } from "react-router-dom";
import { failedNoti, successNoti } from "../../utils/noti";
import { getProductsAPI } from "../../apis/products.services";
import {
  AddToWishListAPI,
  getWishListAPIID,
} from "../../apis/favorite-product.services";
import ReactLoading from "react-loading";
import publicAxios from "../../config/PublicAxios";
import { formatMoney } from "../../utils/formatMoney";
export default function Searchpd() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [product, setProduct] = useState([]);
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [status, setStatus] = useState(false);
  const [flag, setFlag] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const handleGetProducts = async () => {
    const res = await getProductsAPI();
    setProduct(res.data);
  };
  const handleAddToWishList = async (item) => {
    if (!userLogin) {
      failedNoti("Please login to add product to wish list");
      return;
    }
    const res = await AddToWishListAPI(userLogin.id, item.id);
    successNoti(res.data.message);
  };
  const handleSearch = async (e) => {
    const search = e.target.value.toLowerCase();
    try {
      const response = await publicAxios.get(
        `/api/product/search?key=${search}`
      );
      setProduct(response.data);
    } catch (error) {
      failed(error.response.data.message);
    }
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
    <>
      <div className="searchproducttitle">
        <h2>Search Products : </h2>
        <div className="search_productslish">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
      </div>
      <div>
        {status ? (
          <div>
            <div className="flex items-center mt-10">
              <div className="bg-[#8A33FD] w-2 h-8 rounded-lg ml-7"></div>
              <p className="ml-6 font-bold text-xl">Products</p>
            </div>

            <div className="grid grid-cols-4 mt-10 gap-5 drop-shadow-xl mb-[200px] pl-10 pr-10 ">
              {product.map((item, index) => (
                <div key={index} className="rounded-lg border h-[430px]">
                  <button className="w-8 h-8 relative left-[290px] top-2 cursor-pointer">
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
            className="m-auto pb-[200px] pt-[200px]"
          />
        )}
      </div>
    </>
  );
}
