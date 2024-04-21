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
import { Link, useNavigate } from "react-router-dom";
import "./Heatder.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Heatder() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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
  const navigate = useNavigate();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div className="container-fluid">
          {" "}
          <Link to="/product-women">
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
                <Link to="/">
                  <h3>Home</h3>
                </Link>
                {/* <Nav.Link href="#link">
                                    {" "}
                                    <Link to="/product-men">
                                        <h3>Men</h3>
                                    </Link>
                                </Nav.Link> */}{" "}
                <Link to="/product-women">
                  <h3>Product</h3>
                </Link>{" "}
                <Link to="*">
                  <h3>Combos</h3>
                </Link>{" "}
                <Link to="*">
                  <h3>Joggers</h3>
                </Link>
              </div>

              <div className="Search_Heatder">
                <div>
                  <img src={search} alt="" />
                </div>
                <input type="text" placeholder="Search" />
              </div>
              {userLogin ? (
                <div className="Icon_Heatder">
                  <div className="component">
                    <Link to="/wishlist">
                      <AiOutlineHeart className="icon" />
                    </Link>
                  </div>
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
                      <MenuItem onClick={()=> navigate("/order")}>My cart</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>

                  <div className="component">
                    <Link to="/cart">
                      <BsCart className="icon" />
                    </Link>
                  </div>
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
