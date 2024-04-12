import React from "react";
import "./admin.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/images/Logo.png";

function Admin() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin") || "{}");
    const navigate = useNavigate();
    React.useEffect(() => {
        document.title = "admin";
        if (userLogin.active == 0) {
            navigate("/");
        } else {
            if (userLogin.email != "admin@gmail.com") {
                navigate("/admin");
            }
        }
    }, []);

    const handleLogout = () => {
        if (window.confirm("Admin muốn đăng xuất?")) {
            localStorage.removeItem("userLogin");
            navigate("/");
            return;
        }
    };
    return (
        <div>
            <nav
                className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
                id="navbarVertical"
            >
                <div className=" container-fluid">
                    {/* Toggler */}
                    <button
                        className="navbar-toggler ms-n2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Brand */}
                    <a
                        className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 w-[250px]"
                        href="#"
                    >
                        <img src={logo} alt="" />
                    </a>
                    {/* Collapse */}
                    <div className="navbar-collapse" id="sidebarCollapse">
                        {/* Navigation */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/admin">
                                    <i className="bi bi-house px-lg-6" /> User
                                </Link>
                            </li>
                            <li className="nav-item" id="addProduct">
                                <Link to="adminProduct">
                                    <i className="bi bi-bar-chart px-lg-6" />{" "}
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="adminBill">
                                    <i className="bi bi-people px-lg-6" /> List
                                    Order
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="adminCategory">
                                    <i className="bi bi-people px-lg-6" />{" "}
                                    Category
                                </Link>
                            </li>
                        </ul>
                        {/* Divider */}
                        <hr className="navbar-divider my-5 opacity-20" />
                        <div className="mt-auto" />
                        {/* User (md) */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-person-square" />{" "}
                                    Account
                                </a>
                            </li>
                            <li
                                className="nav-item"
                                onClick={() => handleLogout()}
                            >
                                <Link to="/login" className="nav-link">
                                    <i className="bi bi-box-arrow-left" />{" "}
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Admin;
