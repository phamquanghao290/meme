import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.scss";
import p1 from "../../../public/images/Rectangle 734.png";
import deletecon from "../../../public/images/deletecon.png";
import { Input } from "antd";
import { failed, success } from "../../components/Modal/NotificationModal";
import { handleDecreaseCartAPI, handleDeleteCartAPI, handleGetCartAPI, handleGetProductAPI, handleIncreaseCartAPI } from "../../apis/cart";
import { formatMoney } from "../../utils/formatMoney";

function Cart() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);
  const [total, setTotal] = useState(0);
  const [allCart, setAllCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const handleGetCartByUserId = async () => {
    const response = await handleGetCartAPI(userLogin?.id);
    setCart(response.data);
  };
  const handleGetProduct = async () => {
    try {
      const res = await handleGetProductAPI()
      setProduct(res.data);
    } catch (error) {
      console.log(error)
    }
  };
  const handleDeleteCart = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await handleDeleteCartAPI(id);
      setFlag(!flag);
      success("Cart deleted successfully");
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
      failed("Not enough quantity in stock");
      return;
    }
    await handleIncreaseCartAPI(item);
    setFlag(!flag);
  };
  const handleDecrease = async (item) => {
    if (item.quantity <= 1) {
      handleDeleteCart(item.id);
      setFlag(!flag);
    } else {
      await handleDecreaseCartAPI(item);
      setFlag(!flag);
    }
  };
  useEffect(() => {
    handleGetCartByUserId();
    handleGetProduct();
    document.title = "Checkout";
    return () => {
      setFlag(false)
    }
  }, [flag]);
  useEffect(() => {
    handleTotalPrice();
  }, [cart]);
  const numberCart = 0;
  const handlOder = () => {
    if (cart.length > 0) {
      success("Order Success");
      navigate(`/checkout/${userLogin.id}`);
    }
    else {
      failed("There are no orders yet");
    }
  };
  return (
    <div>
      <div className="container">
        <h1 className="text-xl font-bold mt-3 ml-4">Cart</h1>
        <br />
        <div className="ml-4">
          <p className="mt-[-20px]">
            Please fill in the fields below and click place order to complete your
            purchase!
          </p>
        </div>
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
                    <td>{formatMoney(item.product.price)}</td>
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
                    <td>{formatMoney(item.product.price * item.quantity)}</td>
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
              <p>{formatMoney(total)}</p>
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
              <p>{formatMoney(total)}</p>
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
