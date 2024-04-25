import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Button, Modal } from "antd";
import "./order.scss";
import axios from "axios";

const items = [
  {
    label: "Active",
    key: "mail",
  },
  {
    label: "Navigation Two",
    key: "app",
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

function Order() {
  const currentUser = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const [bills, setBills] = useState([]);
  const handleGetbills = async () => {
    const response = await axios.get(
      `http://localhost:8080/order/getorderById/${currentUser.id}`
    );
    setBills(response.data);
  };
  const [current, setCurrent] = useState("mail");
  const [infoDetail, setInfoDetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const showModal = async (id) => {
    setIsModalOpen(true);
    try {
      const res = await axios.get(`http://localhost:8080/order-detail/${id}`);
      setInfoDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(infoDetail);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangStatus = async (id, status) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel your order?"
    );
    if (confirm) {
      try {
        const res = await axios.patch(
          `http://localhost:8080/order/cancelOrder/${id}`,
          {
            status_order: status,
          }
        );
        handleGetbills();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const numbers = 0;
  useEffect(() => {
    handleGetbills();
  }, []);
  return (
    <div className="main-body-info">
      <div className="main-nav-info">
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#807D7E",
            lineHeight: "22px",
          }}
        >
          Home
          <span>
            {" "}
            <i
              class="fa-solid fa-chevron-right"
              style={{ fontSize: "12px", marginLeft: "5px" }}
            ></i>{" "}
          </span>
          <span style={{ marginLeft: "5px" }}>My account</span>
          <span>
            {" "}
            <i
              class="fa-solid fa-chevron-right"
              style={{ fontSize: "12px" }}
            ></i>{" "}
          </span>
          <span style={{ color: "#3C4242", marginLeft: "5px" }}>My orders</span>
        </p>
      </div>

      <div className="main-content-info">
        <div className="main-content-info-left">
          <div style={{ display: "flex", gap: "10px" }}>
            <p
              style={{
                width: "6px",
                height: "30px",
                backgroundColor: "#8A33FD",
                borderRadius: "5px",
              }}
            ></p>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#3C4242",
                lineHeight: "33px",
              }}
            >
              Hello : {currentUser.name}
            </p>
          </div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#807D7E",
              lineHeight: "33px",
              marginTop: "10px",
            }}
          >
            Welcome to your Account
          </p>

          <div className="main-content-info-left-option">
            <p>
              <i
                class="fa-solid fa-bag-shopping"
                style={{ color: "#807D7E", fontSize: "18px" }}
              ></i>
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#807D7E",
                lineHeight: "21px",
              }}
            >
              My orders
            </p>
          </div>
          <div className="main-content-info-left-option">
            <p>
              <i
                class="fa-regular fa-heart"
                style={{
                  color: "#807D7E",
                  fontSize: "18px",
                  width: "5%",
                }}
              ></i>
            </p>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#807D7E",
                lineHeight: "21px",
              }}
            >
              Wishlist
            </p>
          </div>
          <div className="main-content-info-left-option">
            <i
              class="fa-regular fa-user"
              style={{ color: "#807D7E", fontSize: "18px" }}
            ></i>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#807D7E",
                lineHeight: "21px",
              }}
            >
              My info
            </p>
          </div>
          <div className="main-content-info-left-option">
            <i
              class="fa-solid fa-arrow-right-from-bracket"
              style={{ color: "#807D7E", fontSize: "18px" }}
            ></i>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#807D7E",
                lineHeight: "21px",
              }}
            >
              Sign out
            </p>
          </div>
        </div>

        <div className="main-content-info-right">
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#3C4242",
                lineHeight: "33px",
                borderLeft: "5px solid #8A33FD",
              }}
            >
              <h2 style={{ marginLeft: "20px" }}>My Order</h2>
            </h2>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#3C4242",
                lineHeight: "33px",
                marginLeft: "20px",
              }}
            >
              Contact Details
            </h2>
          </div>
          {!bills?.length == numbers ? (
            <>
              {bills.map((item, key) => (
                <div className="w-100 h-40 p-7 bg-slate-100 rounded-lg drop-shadow-lg mt-10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">
                      Name : {item.user_name}
                    </h3>
                    <button
                      className="text-white bg-[#8A33FD] rounded-lg px-[40px] py-2"
                      onClick={() => showModal(item.id)}
                    >
                      View Detail
                    </button>
                  </div>
                  <div className="flex  items-center mt-2">
                    <p>Address : {item.address},</p>
                    <p>{item.addressCity}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p>Phone Number:{item.phone}</p>
                    <div className="flex items-center gap-3">
                      <p>${item.total}</p>
                      <div>
                        {item.status_order === 0 ? (
                          <button
                            className="text-white bg-[#4166f8] rounded-lg px-4 py-2"
                            onClick={() =>
                              handleChangStatus(item.id, item.status_order)
                            }
                          >
                            Cancel
                          </button>
                        ) : item.status_order === 1 ? (
                          <p className="text-[#5b45eb] rounded-lg px-4 py-2">
                            Confirm
                          </p>
                        ) : (
                          <p className="text-[red] rounded-lg px-4 py-2">
                            Canceled
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center mt-[50px] mb-[100px]">
              <h2 className="h2Carts" style={{}}>
                No orders have been paid...!!!
              </h2>
              <img
                src="https://c7.alamy.com/thumbs/2apffam/a-funny-cartoon-character-of-shopping-basket-with-a-menu-2apffam.jpg"
                alt=""
                className="ml-[450px]"
              />
            </div>
          )}
        </div>
      </div>
      <Modal
        title="Order Detail"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className=""
      >
        {infoDetail?.map((item, index) => {
          return (
            <div className="flex  p-5 bg-slate-200 mt-4 rounded-lg">
              <div>
                <div className="flex gap-5 ">
                  <img className="w-[100px]" src={item.product.image} alt="" />
                  <div>
                    <h3 className="font-bold">
                      Name : {item.product.nameProduct}
                    </h3>
                    <p>Stock : {item.quantity}</p>
                    <p>Price : ${item.product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Modal>
    </div>
  );
}

export default Order;
