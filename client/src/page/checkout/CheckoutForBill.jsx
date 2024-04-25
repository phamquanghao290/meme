import React, { useState, useEffect } from "react";
import anh1 from "../../../public/images/product13.png";
import { Input, Radio, Space } from "antd";
import axios from "axios";
import publicAxios from "../../config/PublicAxios";
import { Checkbox } from "antd";
import Paypal from "../../../public/images/Paypal.png";
import GPay from "../../../public/images/GPay.png";
import Visa from "../../../public/images/Visa.png";
import Paypass from "../../../public/images/Paypass.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { success, failed } from "../../components/Modal/NotificationModal";
import "./checkout.scss";

function CheckoutForBill() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const currentUser = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const [dataCity, setDataCity] = useState([]);
  const [dataDistrict, setDataDistrict] = useState([]);
  const [dataWard, setDataWard] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [flag, setFlag] = useState(false);
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(1);
  const handleGetDataCity = async () => {
    let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
    setDataCity(data.data.results);
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const handleGetCart = async () => {
    const res = await publicAxios.get(`/api/cart/getCartByUserId/${id}`);

    setCart(res.data);
  };

  const handleCity = async (e) => {
    let idCity = +e.target.value;
    const nameCity = dataCity.find((item) => item.province_id == idCity);
    let data = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${idCity}`
    );
    setCity(nameCity.province_name);
    setDataDistrict(data.data.results);
  };
  const handleDistrict = async (e) => {
    let idDistrict = +e.target.value;
    const nameDistrict = dataDistrict.find(
      (item) => item.district_id == idDistrict
    );
    let data = await axios.get(
      `https://vapi.vnappmob.com/api/province/ward/${idDistrict}`
    );
    setDistrict(nameDistrict.district_name);
    setDataWard(data.data.results);
  };

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleOrderCart = async () => {
    
    let addresscity = city + "," + district + "," + ward;
    if (cart.length == 0) {
      failed("No Products to Pay for");
      return;
    }

    const regexPhone = /^(0|\+84)\d{9,10}$/;
    const phoneNumberRegex = /^(?!-)\d+$/;

    if (phone == "" || !phoneNumberRegex.test(phone)) {
      failed(
        "Phone Number Cannot Be Empty, Phone Number Cannot Have Negative Numbers"
      );
      return;
    }

    if (!regexPhone.test(phone)) {
      failed("Phone Number Must Have 10 Digits, Beginning 09");
      return;
    }
    if (address == "") {
      failed("Address Addresses are not empty");
      return;
    }
    if (city == "" || district == "" || ward == "") {
      failed("Address Cannot Be Empty");
      return;
    }
    const orders = {
      userID: currentUser.id,
      user_name: currentUser.name,
      addresscity,
      phone,
      address,
      status: 0,
      total,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/order/createOrder",
        orders
      );

      await Promise.all(
        cart.map(async (item) => {
          const datadetail = {
            order_id: response.data.id,
            productsId: item.product.id,
            quantity: item.quantity,
          };

          await axios.post(
            "http://localhost:8080/order-detail/createBillDetails",
            datadetail
          );
        })
      );
      await axios.delete(
        `http://localhost:8080/api/cart/all/${currentUser.id}`
      );
      setCart([]);
      success("Đã Thanh Toán");
      // dispatch(getCart(currentUser?.id));
      navigate(`/order`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTotalCart = () => {
    let result = cart?.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    setTotal(result);
  };

  useEffect(() => {
    handleTotalCart();
  }, [cart]);
  useEffect(() => {
    handleGetDataCity();
    handleGetCart();

    document.title = "Checkout";
  }, []);

  return (
    <div>
      <div className="Checkout">
        <div className="name_checkout">
          <div
            style={{
              backgroundColor: "#8A33FD",
              width: "7px",
              height: "30px",
              borderRadius: "7px",
            }}
          ></div>
          <h2 className="text-2xl font-bold">Checkout</h2>
        </div>
        <br />
        <h3 className="font-bold text-md">Billing Details</h3>
        <br />
        <div className="Bill">
          <div>
            <div className="Form_bill">
              <div>
                <label className="font-bold text-[#3C4242]">Phone *</label>
                <br />
                <input
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="position-relative right-[150px]">
                <label className="font-bold text-[#3C4242]">Address *</label>
                <br />
                <input
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div
                style={{
                  maxWidth: "1000px",

                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <select
                  onChange={handleCity}
                  name=""
                  id=""
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    width: "170px",
                    marginRight: "30px",
                    height: "30px",
                  }}
                >
                  <option value="">Chọn Thành Phố</option>
                  {dataCity.map((item, index) => (
                    <option key={index} value={item.province_id}>
                      {item.province_name}
                    </option>
                  ))}
                </select>
                <br />
                <select
                  onChange={handleDistrict}
                  name=""
                  id=""
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    width: "170px",
                    marginRight: "30px",
                    height: "30px",
                  }}
                >
                  <option>Chọn Quận/Huyện</option>
                  {dataDistrict.map((item, index) => (
                    <option key={index} value={item.district_id}>
                      {item.district_name}
                    </option>
                  ))}
                </select>
                <br />
                <select
                  onChange={(e) => setWard(e.target.value)}
                  name=""
                  id=""
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    width: "170px",
                    marginRight: "30px",
                    height: "30px",
                  }}
                >
                  <option value="">Chọn Phường/Xã</option>
                  {dataWard.map((item, index) => (
                    <option key={index} value={item.ward_name}>
                      {item.ward_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[150px] mt-[30px]">
              <div >
                <h3 className="font-bold text-[#3C4242] text-lg">Payment method</h3>

                <p>All transactions are secure and encrypted.</p>
              </div>
              <div>
                <div >
                  <h4 className="font-bold text-[#3C4242] text-lg">Cash on delivery</h4>
                  <p>Pay with cash upon delivery.</p>
                </div>
              </div>
            </div>
            <button
              className="cursor-pointer bg-[#8a33fd] text-white font-bold py-2 px-4 rounded mt-[30px] "
              onClick={handleOrderCart}
            >
              Pay Now
            </button>
          </div>

          <div className="All_Total">
            <h2>Order Summary</h2>
            <hr
              style={{
                width: "90%",
                margin: "auto",
                marginTop: "20px",
                opacity: "0.5",
              }}
            />
            {cart.map((item, index) => (
              <div>
                <div className="sp" key={index}>
                  <img
                    src={item.product.image}
                    alt=""
                    className="max-w-[90px] w-full max-h-[100px] h-full"
                  />
                  <div>
                    <p>{item.product.name_product}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p>${item.product.price}</p>
                </div>
                <hr
                  style={{
                    width: "90%",
                    margin: "auto",
                    marginTop: "20px",
                    opacity: "0.5",
                  }}
                />
              </div>
            ))}
            <div className="sp">
              <h3>Shipping</h3>
              <h3>0$</h3>
            </div>
            <div className="sp">
              <h3>Total</h3>
              <h3>${total}.00</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForBill;
