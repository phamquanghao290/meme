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
        <div className="container">
          <div>
            <h2>Need Help</h2>
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
            <h2>Company</h2>
            <p>About Us</p>
            <p>euphoria Blog</p>
            <p>euphoriastan</p>
            <p>Collaboration</p>
            <p>Media</p>
          </div>
          <div>
            <h2>More Info</h2>
            <p>Term and Conditions</p>
            <p>Privacy Policy</p>
            <p>Shipping Policy</p>
            <p>Sitemap</p>
          </div>
          <div>
            <h2>Location</h2>
            <p>support@euphoria.in</p>
            <p>Eklingpura Chouraha, Ahmedabad Main Road</p>
            <p>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</p>
            <h2 className="download">Download The App</h2>
            <div className="downloadapp">
              <div className="chplay">
                <img src={CHplay} alt="" />
                <p>Google Play</p>
                <h5>android app on</h5>
              </div>
              <div className="appstore">
                <MdPhoneIphone style={{ fontSize: "40px" }} />
                <p>App Store</p>
                <h5>Available on the</h5>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: "95%" }} />
        <h2 style={{ marginLeft: "120px" }}>Popular Categories</h2>
        <hr style={{ width: "95%" }} />
        <h3
          style={{
            textAlign: "center",
            paddingBottom: "50px",
            paddingTop: "20px",
          }}
        >
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </h3>
      </div>
    </>
  );
}
