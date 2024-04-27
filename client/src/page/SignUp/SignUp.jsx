import React, { useEffect, useState } from "react";
import ImageSu from "../../../public/images/Imagesu.png";
import Google from "../../../public/images/Google.png";
import Twitter from "../../../public/images/twitter.png";
import Divider from "../../../public/images/divider.png";
import { Link, useNavigate } from "react-router-dom";
import publicAxios from "../../config/PublicAxios";
import { success, failed } from "../../components/Modal/NotificationModal";
import { registerService } from "../../apis/auth.services";
import "./SignUp.scss";
import { API_REGISTER } from "../../apis/patchAPI";

export default function SignUp() {
    const navigate = useNavigate();
    // const {
    //     name,
    //     setName,
    //     email,
    //     setEmail,
    //     phone,
    //     setPhone,
    //     password,
    //     setPassword,
    //     confirmPassword,
    //     setConfirmPassword,
    //     nameError,
    //     emailError,
    //     phoneError,
    //     passwordError,
    //     confirmPasswordError,
    //     handleRegister
    // } = registerService();

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: 0,
        status: 0,
    });

    const [errorInput, setErrorInput] = React.useState({
        errName: "",
        errEmail: "",
        errPhone: "",
        errPass: "",
        errConfirm: "",
    });

    const handleRegister = async () => {
        const err = {
            errName: "",
            errEmail: "",
            errPhone: "",
            errPass: "",
            errConfirm: "",
        };
        const regexName = /^.{4,}$/;
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const regexPhone = /^(0|\+84)\d{9,10}$/;
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        let check = true;

        if (!regexName.test(newUser.name)) {
            err.errName = "Tên phải có 6 kí tự trở nên";
            check = false;
        }

        if (!regexEmail.test(newUser.email)) {
            err.errEmail = "Email chưa đúng định dạng";
            check = false;
        }

        if (!regexPhone.test(newUser.phone)) {
            err.errPhone = "Số điện thoại chưa đúng định dạng";
            check = false;
        }

        if (!regexPass.test(newUser.password)) {
            err.errPass = "Mật khẩu phải có 6 kí tự trở lên và có cả chữ số";
            check = false;
        }

        if (!(newUser.password == newUser.confirmPassword)) {
            err.errConfirm = "Mật khẩu không khớp";
            check = false;
        }
        if (!check) {
            setErrorInput(err);
            return;
        } else {
            const response = await publicAxios.post(API_REGISTER, {
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                password: newUser.password,
            });
            success("Đăng ký thành công");
            setNewUser({
                name: "",
                email: "",
                phone: "",
                password: "",
                role: 0,
                status: 0,
            });
            navigate("/sign-in");
        }
    };
    useEffect(() => {
        document.title = "Sign Up";
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mainBody">
            <div className="mainImage">
                <img src={ImageSu} className="image" alt="" />
            </div>
            <div className="mainContent">
                <div className="mainTitle">Sign Up</div>
                <p
                    style={{
                        marginTop: "20px",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#3c4242",
                    }}
                >
                    Sign up for free to access to in any of our products{" "}
                </p>
                <div className="mainInput1" id="name">
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#3c4242",
                        }}
                    >
                        Username
                    </p>
                    <input
                        type="text"
                        placeholder="Ngyuen Van A"
                        name="name"
                        onChange={(e) => {
                            setNewUser({ ...newUser, name: e.target.value });
                        }}
                        required
                        value={newUser.name}
                    />
                    <p className="error-content">{errorInput.errName}</p>
                </div>
                <div className="mainInput1" id="email">
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#3c4242",
                        }}
                    >
                        Email
                    </p>
                    <input
                        type="text"
                        placeholder="designer@gmail.com"
                        name="email"
                        onChange={(e) => {
                            setNewUser({ ...newUser, email: e.target.value });
                        }}
                        required
                        value={newUser.email}
                    />
                    <p className="error-content">{errorInput.errEmail}</p>
                </div>
                <div className="mainInput1" id="phone">
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#3c4242",
                        }}
                    >
                        Phone
                    </p>
                    <input
                        type="text"
                        placeholder="0123456789"
                        name="phone"
                        onChange={(e) => {
                            setNewUser({ ...newUser, phone: e.target.value });
                        }}
                        required
                        value={newUser.phone}
                    />
                    <p className="error-content">{errorInput.errPhone}</p>
                </div>
                <div className="mainInput1" id="password">
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#3c4242",
                        }}
                    >
                        Password
                    </p>
                    <input
                        type="password"
                        placeholder="Qwerty@123"
                        name="password"
                        onChange={(e) => {
                            setNewUser({ ...newUser, password: e.target.value });
                        }}
                        required
                        value={newUser.password}
                    />
                    <p className="error-content">{errorInput.errPass}</p>
                </div>
                <div className="mainInput1" id="confirmPassword">
                    <p
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#3c4242",
                        }}
                    >
                        Confirm Password
                    </p>
                    <input
                        type="password"
                        placeholder="Qwerty@123"
                        name="confirmPassword"
                        onChange={(e) => {
                            setNewUser({ ...newUser, confirmPassword: e.target.value });
                        }}
                        value={newUser.confirmPassword}
                    />
                    <p className="error-content">{errorInput.errConfirm}</p>
                </div>
                <div className="main-button">
                    <div className="main-button-sign-up">
                        <button
                            onClick={handleRegister}
                            className="main-button-signin"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="main-content-end">
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: "#3c4242",
                            }}
                        >
                            Already have an account?{" "}
                            <Link to="/sign-in">
                                <span
                                    style={{
                                        color: "#3c4242",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Login
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
