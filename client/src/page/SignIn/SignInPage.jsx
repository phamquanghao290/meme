import { BsFacebook } from "react-icons/bs";
import React, { useEffect } from "react";
import Image from "../../../public/images/image1.png";
import Google from "../../../public/images/Google.png";
import Twitter from "../../../public/images/twitter.png";
import Divider from "../../../public/images/divider.png";
import publicAxios from "../../config/PublicAxios";
import { success, failed } from "../../components/Modal/NotificationModal";
import "./SignInPage.scss";
import { Link } from "react-router-dom";
import { signInWithFacebook, signInWithGoogle } from "../../firebase/firebase";
import { API_LOGIN } from "../../apis/patchAPI";

export default function SignInPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleLoginGoogle = async () => {
    const authGoogle = await signInWithGoogle();
    const user = authGoogle.user;
    let data = {
      email: user.email,
      name: user.displayName,
      password: user.uid,
      phone: "0987654321",
      role: 0,
      status: 0,
    };
    const res = await publicAxios.post("/api/login-google", data);
    if (res.data.data) {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userLogin",JSON.stringify(res.data.data.user));
      success(res.data.message);    
      setTimeout(() => {window.location.href = "/"}, 1500);         
    }
  };

  const handleLoginFacebook = async () => {
    const authFacebook = await signInWithFacebook();
    const user = authFacebook.user;
    let data1 = {
      email: user.email,
      name: user.displayName,
      password: user.uid,
      phone: "0987654321",
      role: 0,
      status: 0,
    };
    const res = await publicAxios.post("/api/login-facebook", data1);
    if (res.data.data) {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userLogin", JSON.stringify(res.data.data.user));
      success(res.data.message);  
      setTimeout(() => { window.location.href = "/"}, 1500)     
    }
  };

  const handleLogin = async () => {
    try {
      const response = await publicAxios.post(API_LOGIN, user);
      if (!user.email || !user.password) {
        failed("Please enter complete information");
        return;
      }
      if (response.data.user.email === "admin@gmail.com") {
        localStorage.setItem("admin",JSON.stringify(response.data.user));
        success("Hello Admin");
        setTimeout(() => {
          window.location.href = "/admin";
        }, 1500);     
        return;
      }

      if (response.data.user.status === 1) {
        failed("Your account has been locked");
        return;
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userLogin", JSON.stringify(response.data.user));
      success(response.data.message);
      setTimeout(() => {window.location.href = "/"}, 1500);
    } catch (error) {
      failed("Account or password is incorrect");
    }
  };

  useEffect(() => {
    document.title = "Sign In";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mainBody">
      <div className="mainImage">
        <img src={Image} className="image" alt="" />
      </div>
      <div className="mainContent">
        <div className="mainTitle">Sign In Page</div>
        <div className="mainButton">
          <img className="mainButtonImage" src={Google} alt="" />
          <button onClick={handleLoginGoogle}>Continue With Google</button>
          <div className="mainButton2">
            <button
              onClick={handleLoginFacebook}
              className="continue-button-signin"
            >
              <BsFacebook className="text-xl text-blue-500 mr-2" />Continue With Facebook
            </button>
          </div>
        </div>
        <div className="divider">
          <img src={Divider} alt="" />
        </div>
        <div className="mainInput-sign-in">
          <p
            style={{
              marginBottom: "10px",
              fontSize: "16px",
              fontWeight: "400",
              color: "#3c4242",
            }}
          >
            User name or email address
          </p>
          <input
            className="input-sign-in"
            type="text"
            name="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            value={user.email}
          />
        </div>
        <div>
          <div className="mainInput2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "90%",
              }}
            >
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#3c4242",
                }}
              >
                Password
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <i
                class="fa-regular fa-eye-slash"
                style={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#3c4242",
                }}
              ></i>
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#3c4242",
                }}
              >
                Hide
              </p>
            </div>
          </div>
          <div className="mainInput3">
            <input
              className="input3-sign-in"
              type="password"
              name="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              value={user.password}
            />
          </div>
          <div>
            <Link to="/forgot-password">
              <p
                style={{
                  textAlign: "right",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#3c4242",
                  marginTop: "10px",
                  textDecoration: "underline",
                }}
              >
                Forgot your password
              </p>
            </Link>
          </div>
        </div>
        <div className="main-button">
          <button onClick={handleLogin} className="main-button-signin">
            Sign In
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
            Don't have an account?{" "}
            <Link to="/sign-up">
              <span
                style={{
                  color: "#3c4242",
                  textDecoration: "underline",
                }}
              >
                Sign up
              </span>
            </Link>
          </p>
        </div>
        <div className="main-content-end">
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#3c4242",
            }}
          >
            Return to main page?{" "}
            <Link to="/">
              <span
                style={{
                  color: "#3c4242",
                  textDecoration: "underline",
                }}
              >
                Home
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}