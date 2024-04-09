import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './checkout.scss'
function CheckoutForBill() {
    const [dataCity, setDataCity] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataWard, setDataWard] = useState([])
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const handleGetDataCity = async() => {
        let data = await axios.get(`https://vapi.vnappmob.com/api/province/`);
        setDataCity(data.data.results)
    }
    const handleCity = async(e) => {
        let idCity = +e.target.value
        const nameCity = dataCity.find(item => item.province_id == idCity)
        let data = await axios.get(`https://vapi.vnappmob.com/api/province/district/${idCity}`)
        console.log(nameCity);
        setCity(nameCity.province_name)
        setDataDistrict(data.data.results)
    }
    const handleDistrict = async(e) => {
        let idDistrict = +e.target.value
        const nameDistrict = dataDistrict.find(item => item.district_id == idDistrict)
        let data = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${idDistrict}`)
        setDistrict(nameDistrict.district_name)
        setDataWard(data.data.results)
    }
    useEffect(() => {
        handleGetDataCity()
    }, [])
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
                  <div className="Form_bill">
                      <div>
                          <label>Name *</label>
                          <br />
                          <input type="text" placeholder="Name" />
                      </div>
                      <div>
                          <label>Phone *</label>
                          <br />
                          <input type="number" placeholder="Phone number" />
                      </div>
                      <div>
                          <label>Country / Region *</label>
                          <br />
                          <input type="text" placeholder="Country / Region" />
                      </div>
                      <div>
                          <label>Address *</label>
                          <br />
                          <input type="text" placeholder="Address" />
                      </div>
                      <div style={{ display: "block" }}>
                          <select
                              onChange={handleCity}
                              name=""
                              id=""
                              style={{ display: "block" }}
                          >
                              <option value="">Chọn thành phố</option>
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
                              style={{ display: "block" }}
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
                              style={{ display: "block" }}
                          >
                              <option value="">Chọn Phường/Xã</option>
                              {dataWard.map((item, index) => (
                                  <option key={index} value={item.ward_id}>
                                      {item.ward_name}
                                  </option>
                              ))}
                          </select>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default CheckoutForBill