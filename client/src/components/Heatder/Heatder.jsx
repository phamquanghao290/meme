import { AiOutlineHeart } from "react-icons/ai"; 
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import logo from "../../../public/images/Logo.png";
import search from "../../../public/images/search.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Heatder.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Heatder() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary "  style={{ position: "fixed", width: "100%", backgroundColor:"white" }}>
        <div className="container-fluid"  >
          <Navbar.Brand href="#home">
            {" "}
            <div className="Logo_Heatder">
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
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
                <Nav.Link href="#home">
                  {" "}
                  <Link to="/">
                    <h3>Home</h3>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/productMen">
                    <h3>Men</h3>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/productWomen">
                    <h3>Women</h3>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/productMen">
                    <h3>Combos</h3>
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/productMen">
                    <h3>Joggers</h3>
                  </Link>
                </Nav.Link>
              </div>

              <div className="Search_Heatder">
                <div>
                  <img src={search} alt="" />
                </div>
                <input type="text" placeholder="Search" />
              </div>
              <div className="Icon_Heatder">
                <div className="component">
                  <AiOutlineHeart className="icon" />
                </div>
                <div className="component">
                  <AiOutlineUser className="icon" />
                </div>
                <div className="component">
                  <Link to="/cart">
                    <BsCart className="icon" />
                  </Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}
