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
import { formatMoney } from "../../utils/formatMoney";
export default function Bestseller() {
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
  const sortedProducts = product.sort((a, b) => a.stock - b.stock);
  const lowestStockProducts = sortedProducts.slice(0, 12);
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
    <>
      <div>
        <div className="text-center mt-[50px] mb-[50px]">
          <hr className="w-[400px] m-auto" />
          <h2 className="text-[70px] font-bold text-[#ff4242]">BESTSELLER</h2>
          <hr className="w-[400px] m-auto" />
        </div>
        {status ? (
          <div>
            <div className="flex items-center mt-10 justify-center">
              <div className="bg-[#8A33FD] w-2 h-8 rounded-lg ml-7"></div>
              <p className="ml-6 font-bold text-xl">Products Bestseller</p>
              <div className="bg-[#8A33FD] w-2 h-8 rounded-lg ml-7 mb-[20px]"></div>
            </div>

            <div className="grid grid-cols-4 mt-10 gap-5 drop-shadow-xl mb-[200px] pl-10 pr-10 ">
              {lowestStockProducts.map((item, index) => (
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
