import React, { useState } from 'react'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Button, Modal } from "antd";
import './order.scss'

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
            <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
            >
                Navigation Four - Link
            </a>
        ),
        key: "alipay",
    },
];

function Order() {
    const [current, setCurrent] = useState("mail");
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                  <span style={{ color: "#3C4242", marginLeft: "5px" }}>
                      My orders
                  </span>
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
                          Hello Jhanvi
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
                          }}
                      >
                          My Order
                      </h2>
                      <h2
                          style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#3C4242",
                              lineHeight: "33px",
                          }}
                      >
                          Contact Details
                      </h2>
                  </div>
                  <br />
                  <Menu
                      onClick={onClick}
                      selectedKeys={[current]}
                      mode="horizontal"
                      items={items}
                  />
                  <br />
                  <div className="w-100 h-40 p-7 bg-slate-100 rounded-lg drop-shadow-lg mt-10">
                      <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">
                              Order No. #3C4242
                          </h3>
                          <button
                              className="text-white bg-[#8A33FD] rounded-lg px-4 py-2"
                              onClick={showModal}
                          >
                              View Detail
                          </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Order Date: 12/12/2022</p>
                          <p>Order Status: Pending</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Estimated Delivery Date: 12/12/2022</p>
                          <p>Payment Method: COD</p>
                      </div>
                  </div>
                  <div className="w-100 h-40 p-7 bg-slate-100 rounded-lg drop-shadow-lg mt-10">
                      <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">
                              Order No. #3C4242
                          </h3>
                          <button className="text-white bg-[#8A33FD] rounded-lg px-4 py-2">
                              View Detail
                          </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Order Date: 12/12/2022</p>
                          <p>Order Status: Pending</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Estimated Delivery Date: 12/12/2022</p>
                          <p>Payment Method: COD</p>
                      </div>
                  </div>
                  <div className="w-100 h-40 p-7 bg-slate-100 rounded-lg drop-shadow-lg mt-10">
                      <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">
                              Order No. #3C4242
                          </h3>
                          <button className="text-white bg-[#8A33FD] rounded-lg px-4 py-2">
                              View Detail
                          </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Order Date: 12/12/2022</p>
                          <p>Order Status: Pending</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                          <p>Estimated Delivery Date: 12/12/2022</p>
                          <p>Payment Method: COD</p>
                      </div>
                  </div>
              </div>
          </div>
          <Modal
              title="Order Detail"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              className='mt-20'
          >
              <div className='flex justify-between p-5 bg-slate-200 mt-4 rounded-lg'>
                 <div >
                    <h3 className='font-bold'>Order No. #3C4242</h3>
                    <p>Placed on 12 April 2024 2:40 PM</p>
                 </div>
                 <div className='font-bold'>Total: 143.00$</div>
              </div>
          </Modal>
      </div>
  );
}

export default Order