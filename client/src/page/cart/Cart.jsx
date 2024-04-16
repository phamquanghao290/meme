import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import p1 from "../../../public/images/Rectangle 734.png";
import deletecon from "../../../public/images/deletecon.png";
import { Input } from "antd";

function Cart() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container">
                <h1 className="title">Cart</h1><br />
                <p>
                    Please fill in the fields below and click place order to
                    complete your purchase!
                </p>
                <p>Already register ?</p>{" "}
                <Link to="/login"> Please login here</Link>
            </div>
            <div className="table_cart">
                <table className="table_cart_info">
                    <thead>
                        <tr>
                            <th className="one">PRODUCT DETAILS</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>SHIPPING</th>
                            <th>SUBTOTAL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="image">
                                <img src={p1} alt="" />
                                <div>
                                    <p>Product Name</p>
                                    <p>Size: S</p>
                                    <p>Color: Black</p>
                                </div>
                            </td>
                            <td>$19.99</td>
                            <td>1</td>
                            <td>Free</td>
                            <td>$19.99</td>
                            <td style={{ cursor: "pointer" }}>
                                <img src={deletecon} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td className="image">
                                <img src={p1} alt="" />
                                <div>
                                    <p>Product Name</p>
                                    <p>Size: S</p>
                                    <p>Color: Black</p>
                                </div>
                            </td>
                            <td>$19.99</td>
                            <td>1</td>
                            <td>Free</td>
                            <td>$19.99</td>
                            <td style={{ cursor: "pointer" }}>
                                <img src={deletecon} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="total">
                <div className="discount">
                    <h2>Discount Codes</h2>
                    <p>Enter your coupon code if you have one.</p><br />
                    <div className="input_discount">
                        <Input placeholder="Coupon code" style={{ width: 300, height: 40, borderRadius: 7 }} />
                        <button>Apply</button>
                    </div><br />
                    <button className="continue">Continue Shopping</button>
                </div>
                <div className="checkout">
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
                            <p>Subtotal</p>
                            <p>$19.99</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, fontWeight: "bold" }}>
                            <p>Grand Total</p>
                            <p>$19.99</p>
                        </div>    
                    </div>
                    <hr />
                    <button className="continue">Place Order</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
