import React, { useState, useEffect } from "react";
import anh1 from "../../../public/images/product13.png";
import { Input, Radio, Space } from "antd";
import axios from "axios";
import { Checkbox } from "antd";
import Paypal from '../../../public/images/Paypal.png'
import GPay from '../../../public/images/GPay.png'
import Visa from '../../../public/images/Visa.png'
import Paypass from '../../../public/images/Paypass.png'

import "./checkout.scss";
function CheckoutForBill() {
    const [dataCity, setDataCity] = useState([]);
    const [dataDistrict, setDataDistrict] = useState([]);
    const [dataWard, setDataWard] = useState([]);
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const handleGetDataCity = async () => {
        let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
        setDataCity(data.data.results);
    };
    const handleCity = async (e) => {
        let idCity = +e.target.value;
        const nameCity = dataCity.find((item) => item.province_id == idCity);
        let data = await axios.get(
            `https://vapi.vnappmob.com/api/province/district/${idCity}`
        );
        console.log(nameCity);
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

    const [value, setValue] = useState(1);
    const onChangeRadio = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    useEffect(() => {
        handleGetDataCity();
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
                    <h2>Checkout</h2>
                </div>
                <br />
                <h3>Billing Details</h3>
                <br />
                <div className="Bill">
                    <div>
                        <div className="Form_bill">
                            <div>
                                <label>Name *</label>
                                <br />
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <label>Phone *</label>
                                <br />
                                <input
                                    type="number"
                                    placeholder="Phone number"
                                />
                            </div>
                            <div>
                                <label>Country / Region *</label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Country / Region"
                                />
                            </div>
                            <div>
                                <label>Address *</label>
                                <br />
                                <input type="text" placeholder="Address" />
                            </div>
                            <div
                                style={{
                                    maxWidth: "1000px",
                                    width: "100%",
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
                                        width: "100%",
                                        marginRight: "30px",
                                        height: "30px",
                                    }}
                                >
                                    <option value="">Chọn thành phố</option>
                                    {dataCity.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.province_id}
                                        >
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
                                        width: "100%",
                                        marginRight: "30px",
                                        height: "30px",
                                    }}
                                >
                                    <option>Chọn Quận/Huyện</option>
                                    {dataDistrict.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.district_id}
                                        >
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
                                        width: "100%",
                                        marginRight: "30px",
                                        height: "30px",
                                    }}
                                >
                                    <option value="">Chọn Phường/Xã</option>
                                    {dataWard.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.ward_id}
                                        >
                                            {item.ward_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <button className="main-button">
                                Continue to Shipping
                            </button>
                            <Checkbox
                                onChange={onChange}
                                style={{ marginLeft: "30px" }}
                            >
                                Save my information for a faster checkout
                            </Checkbox>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                            <h3>Payment method</h3>
                            <br />
                            <p>All transactions are secure and encrypted.</p>
                        </div>
                        <div
                            style={{
                                marginTop: "20px",
                                maxWidth: "700px",
                                minHeight: "300px",
                                backgroundColor: "rgb(255, 250, 250)",
                                borderRadius: "10px",
                                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                                padding: "20px",
                            }}
                        >
                            <Radio.Group onChange={onChangeRadio} value={value}>
                                <Space direction="vertical">
                                    <Radio value={1}>
                                        <div style={{ paddingLeft: "15px" }}>
                                            <h4>Credit Cart</h4>
                                            <p>All transactions are secure and encrypted.</p>
                                        </div>      
                                    </Radio>
                                        <div style={{display: "flex", gap: "10px", marginLeft: "30px"}}>
                                            <img src={Paypal} alt="" />
                                            <img src={Visa} alt="" />
                                            <img src={GPay} alt="" />
                                            <img src={Paypass} alt="" />
                                        </div><br />
                                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginLeft: "30px"}}>
                                            <input style={{width: "300px", height: "40px", paddingLeft: "13px", borderRadius: "5px"}} type="text" placeholder="Card Number" />
                                            <input style={{width: "300px", height: "40px", paddingLeft: "13px", borderRadius: "5px"}} type="text" placeholder="Name on card" />
                                            <input style={{width: "300px", height: "40px", paddingLeft: "13px", borderRadius: "5px"}}type="text" placeholder="CVV" />
                                            <input style={{width: "300px", height: "40px", paddingLeft: "13px", borderRadius: "5px"}}type="text" placeholder="Expiry Date (MM/YY)" />
                                        </div>
                                        <hr style={{width: "100%", margin: "auto", marginTop: "20px", opacity: "0.5"}}/>
                                    <Radio value={2}>
                                        <div style={{ paddingLeft: "15px", marginTop: "10px" }}>
                                            <h4>Cash on delivery</h4>
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                    </Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                        <button>Pay Now</button>
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
                        <div className="sp">
                            <img src={anh1} alt="" />
                            <div>
                                <p>Product name x1</p>
                                <p>Color: Yellow</p>
                            </div>
                            <p>$200</p>
                        </div>
                        <hr
                            style={{
                                width: "90%",
                                margin: "auto",
                                marginTop: "20px",
                                opacity: "0.5",
                            }}
                        />
                        <div className="sp">
                            <img src={anh1} alt="" />
                            <div>
                                <p>Product name x1</p>
                                <p>Color: Yellow</p>
                            </div>
                            <p>$200</p>
                        </div>
                        <hr
                            style={{
                                width: "90%",
                                margin: "auto",
                                marginTop: "20px",
                                opacity: "0.5",
                            }}
                        />
                        <div className="sp">
                            <img src={anh1} alt="" />
                            <div>
                                <p>Product name x1</p>
                                <p>Color: Yellow</p>
                            </div>
                            <p>$200</p>
                        </div>
                        <hr
                            style={{
                                width: "90%",
                                margin: "auto",
                                marginTop: "20px",
                                opacity: "0.5",
                            }}
                        />
                        <div className="sp">
                            <h3>Shipping</h3>
                            <h3>-5$</h3>
                        </div>
                        <div className="sp">
                            <h3>Total</h3>
                            <h3>$200</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForBill;
