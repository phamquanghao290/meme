import { MdPhoneIphone } from "react-icons/md";
import React from "react";
import "./Footer.scss";
import instargram from "../../../public/images/instargram.png";
import facebook from "../../../public/images/Facebook.png";
import twitter from "../../../public/images/telegram.png";
import CHplay from "../../../public/images/chplay.png";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container2">
          <div>
            <h2 style={{ color: "white" }}>Need Help</h2>
            <p>Contact Us</p>
            <p>Track Order</p>
            <p>Returns & Refunds</p>
            <p>FAQ's</p>
            <p>Career</p>
            <div className="iconTille_footer">
              <div className="icon_footer">
                <img src={facebook} alt="" />
              </div>

              <div className="icon_footer">
                <img src={twitter} alt="" />
              </div>

              <div className="icon_footer">
                <img src={instargram} alt="" />
              </div>

              <div className="icon_footer">In</div>
            </div>
          </div>
          <div>
            <h2 style={{ color: "white" }}>Company</h2>
            <p>About Us</p>
            <p>euphoria Blog</p>
            <p>euphoriastan</p>
            <p>Collaboration</p>
            <p>Media</p>
          </div>
          <div>
            <h2 style={{ color: "white" }}>More Info</h2>
            <p>Term and Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Sitemap</p>
          </div>
          <div className="location_2">
            <h2 style={{ color: "white" }}>Location</h2>
            <p>support@euphoria.in</p>
            <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            <h2 className="download" style={{ color: "white" }}>
              Download The App
            </h2>
            <div className="downloadapp">
              <div className="chplay">
                <img src={CHplay} alt="" />
                <p>Google Play</p>
                <h5 style={{ color: "white" }}>android app on</h5>
              </div>
              <div className="appstore">
                <MdPhoneIphone style={{ fontSize: "40px" }} />
                <p>App Store</p>
                <h5 style={{ color: "white" }}>Available on the</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer2">
          <hr />
          <h2 style={{ color: "white" }}>Popular Categories</h2>
          <hr />
          <h4 style={{ color: "white" }}>
            Copyright © 2024 Euphoria Folks Pvt Ltd. All rights reserved.
          </h4>
        </div>
      </div>
    </>
  );
}
