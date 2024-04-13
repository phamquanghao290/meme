import { AiOutlineHeart } from "react-icons/ai";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import logo from "../../../public/images/Logo.png";
import search from "../../../public/images/search.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Heatder.scss";
export default function Heatder() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  return (
      <>
          <div className="Heatder">
              <div className="Logo_Heatder">
                  <img src={logo} alt="" />
              </div>
              <div className="Menu_Heatder">
                  <Link to="/">
                      <h3>Home</h3>
                  </Link>
                  <Link to="/productMen">
                      <h3>Men</h3>
                  </Link>
                  <Link to="/productWomen">
                      <h3>Women</h3>
                  </Link>
                  <h3>Combos</h3>
                  <h3>Joggers</h3>
              </div>
              <div className="Search_Heatder">
                  <div>
                      <img src={search} alt="" />
                  </div>
                  <input type="text" placeholder="Search" />
              </div>
              {/* **** */}
              {userLogin ? (
                  <div className="Icon_Heatder">
                      <div className="component">
                          <Link to="/wishlist">
                              <AiOutlineHeart className="icon" />
                          </Link>
                      </div>
                      {/* <div className="component">
                          <AiOutlineUser className="icon" />
                      </div> */}
                      {/* ******* */}
                      <div>
                          <Button
                              // id="basic-button"
                              className="z-9999999 p-3 bg-[#f6f6f6]"
                              aria-controls={open ? "basic-menu" : undefined}
                              // aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                          >  
                            <AiOutlineUser className="icon" />
                          </Button>
                          <Menu
                              className="z-9999999"
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                  "aria-labelledby": "basic-button",
                              }}
                          >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                  My account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </Menu>
                      </div>
                      {/* ******* */}
                      <div className="component">
                          <Link to="/cart">
                              <BsCart className="icon" />
                          </Link>
                      </div>
                  </div>
              ) : (
                  <div className="flex ">
                      <Link to="/sign-in">
                          <button className="bg-[#8A33FD] text-white rounded-lg px-4 py-2">
                              Login
                          </button>
                      </Link>
                      <Link to="/sign-up">
                          <button className="bg-[#8A33FD] text-white rounded-lg px-4 py-2">
                              Sign Up
                          </button>
                      </Link>
                  </div>
              )}

              {/* **** */}
          </div>
      </>
  );
}
