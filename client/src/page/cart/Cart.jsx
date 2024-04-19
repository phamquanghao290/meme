import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.scss";
import p1 from "../../../public/images/Rectangle 734.png";
import deletecon from "../../../public/images/deletecon.png";
import { Input } from "antd";
import { failed, success } from "../../components/Modal/NotificationModal";
import publicAxios from "../../config/PublicAxios";
import CheckoutForBill from "../checkout/CheckoutForBill";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);
  const [total, setTotal] = useState(0);
  const [allCart, setAllCart] = useState([]);

  const handleGetCart = async () => {
    const response = await publicAxios.get("/api/cart/all-cart");
    setAllCart(response.data);
  };
  const navigate = useNavigate();
  const handleGetCartByUserId = async () => {
    const response = await publicAxios.get(
      `/api/cart/getCartByUserId/${userLogin.id}`
    );
    setCart(response.data);
  };
  
  const handleGetProduct = async () => {
    const response = await publicAxios.get(`/api/product`);
    setProduct(response.data);
  };

  const handleDeleteCart = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const response = await publicAxios.delete(`/api/cart/${id}`);
      setFlag(!flag);
      success("Xoa thanh cong");
    }
  };

  const handleTotalPrice = () => {
    let totalPrice = cart?.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
    setTotal(totalPrice);
  };

  const handleIncrease = async (item) => {
    if (item.quantity >= item.product.stock) {
      failed("Số lượng tồn không đủ");
      return;
    }
    const response = await publicAxios.put("/api/cart/increase", item);
    setFlag(!flag);
  };

  const handleDecrease = async (item) => {
    if (item.quantity <= 1) {
      handleDeleteCart(item.id);
      setFlag(!flag);
    } else {
      const response = await publicAxios.put("/api/cart/decrease", item);
      setFlag(!flag);
    }
  };

  useEffect(() => {
    handleGetCartByUserId();
    handleGetCart();
    handleGetProduct();
    document.title = "Checkout";
  }, [flag]);

  useEffect(() => {
    handleTotalPrice();
    setFlag(!flag);
  }, [cart]);
  const numberCart = 0;
  const handlOder = () => {
    if (cart.length > 0) {
      success("Order Success");
      navigate(`/checkout/${userLogin.id}`);
    } else {
      failed("There are no orders yet");
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">Cart</h1>
        <br />
        <p>
          Please fill in the fields below and click place order to complete your
          purchase!
        </p>
        <p>Already register ?</p> <Link to="/login"> Please login here</Link>
      </div>
      <div className="table_cart">
        <table className="table_cart_info">
          <thead>
            <tr>
              <th>STT</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {!cart?.length == numberCart ? (
              <>
                {cart?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="image">
                      <img
                        className="max-w-[100px] m-auto"
                        src={item.product.image}
                        alt=""
                      />
                    </td>
                    <td>{item.product.nameProduct}</td>
                    <td>{USD.format(item.product.price)}</td>
                    <td className="">
                      <button
                        className="mr-5"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="ml-5"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>{USD.format(item.product.price * item.quantity)}</td>
                    <td className="cursor-pointer">
                      <img
                        className="m-auto"
                        src={deletecon}
                        alt=""
                        onClick={() => handleDeleteCart(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <div className="divcarts">
                <div>
                  <h2 className="h2Carts">
                    Chưa có sản phẩm nào trong giỏ hàng...!!!
                  </h2>
                  <img
                    style={{ width: 200, height: 120 }}
                    src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                    alt=""
                  />
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="total">
        <div className="discount">
          <h2>Discount Codes</h2>
          <p>Enter your coupon code if you have one.</p>
          <br />
          <div className="input_discount">
            <Input
              placeholder="Coupon code"
              style={{ width: 300, height: 40, borderRadius: 7 }}
            />
            <button>Apply</button>
          </div>
          <br />
          <button className="continue">Continue Shopping</button>
        </div>
        <div className="checkout">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <p>Subtotal</p>
              <p>{USD.format(total)}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 15,
                fontWeight: "bold",
              }}
            >
              <p>Grand Total</p>
              <p>{USD.format(total)}</p>
            </div>
          </div>
          <hr />

          <button className="continue" onClick={handlOder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
