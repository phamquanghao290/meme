import { AiOutlineHeart } from "react-icons/ai";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../../public/images/Logo.png";
import search from "../../../public/images/search.png";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Heatder.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


export default function Heatder() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [searchHeatder, setSearchHeatder] = React.useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    if (window.confirm("Bạn muốn đăng xuất?")) {
      localStorage.removeItem("userLogin");
      window.location.reload();
      return;
    }
  };
  const handleClicksearch = async () => {
    setSearchHeatder(searchHeatder);
    navigate(`/search-products`);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <div className="container-fluid">
          {" "}
          <Link to="/">
            <div className="Logo_Heatder">
              <img src={logo} alt="" />
            </div>
          </Link>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="visible">
            <Nav
              className="me-auto "
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="header_nav">
                {" "}
                <NavLink to="/" className="header_menu">
                  Home
                </NavLink>
                {/* <Nav.Link href="#link">
                                    {" "}
                                    <Link to="/product-men">
                                        <h3>Men</h3>
                                    </Link>
                                </Nav.Link> */}{" "}
                <NavLink to="/product-man" className="header_menu">
                  Product
                </NavLink>{" "}
                <NavLink to="/bestseller" className="header_menu">Best Seller</NavLink>
                <NavLink to="/Titlebrand" className="header_menu">
                  News
                </NavLink>{" "}
              </div>

              <div className="Search_Heatder">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchHeatder(e.target.value)}
                />
                <div onClick={handleClicksearch}>
                  <img src={search} alt="" />
                </div>
              </div>
              {userLogin ? (
                <div className="Icon_Heatder">
                  <Link to="/wishlist">
                    <div className="component">
                      <AiOutlineHeart className="icon" />
                    </div>
                  </Link>
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
                      <MenuItem onClick={() => navigate("/forgot-password")}>Forgot</MenuItem>
                      <MenuItem onClick={() => navigate("/order")}>
                        My cart
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                  <Link to="/cart">
                    <div className="component">
                      <BsCart className="icon" />
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4 mt-3">
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
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
