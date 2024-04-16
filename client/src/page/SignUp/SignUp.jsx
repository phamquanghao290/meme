import React, { useEffect, useState } from 'react'
import ImageSu from '../../../public/images/Imagesu.png'
import Google from '../../../public/images/Google.png'
import Twitter from '../../../public/images/twitter.png'
import Divider from '../../../public/images/divider.png'
import { Link, useNavigate } from 'react-router-dom'
import publicAxios from '../../config/PublicAxios'
import { success, failed } from '../../components/Modal/NotificationModal'
import './SignUp.scss'

export default function SignUp() {
    const navigate = useNavigate();
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
        errConfirm: ""
    });

    const handleGetValue = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleRegister = async() =>{
        const err = {
            errName: "",
            errEmail: "",
            errPhone: "",
            errPass: "",
            errConfirm: ""
        }
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
            console.log(newUser);
            const response = await publicAxios.post("/api/register", newUser);
            success("Đăng ký thành công");
            setNewUser({
                name: "",   
                email: "",
                phone: "",
                password: "",
                role: 0,
                status: 0
            })
            navigate("/sign-in");
        }

    }
    useEffect(() => {
      document.title = 'Sign Up';
      window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-body-signup'>
            <div className='main-image-signup'>
                <img src={ImageSu} className='image-signup' alt="" />
            </div>

            <div className='main-content-signup'>
                <div className='main-title-signup'>Sign Up
                </div>
                <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Sign up for free to access to in any of our products </p>

                <div className='main-button-signup'>
                    <img className='main-button-image-signup' src={Google} alt="" />
                    <button>Continue With Google</button>

                    <div className='main-button-signup2' >
                        <img className='main-button-image-signup2' src={Twitter} alt="" />
                        <button>Continue With Twitter</button>
                    </div>
                </div>

                {/* <div className='divider'>
                    <img src={Divider} alt="" />
                </div> */}

<<<<<<< HEAD
                <div className='mainInput1-signup'>
                    <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Email Address</p>
                    <input type="text" placeholder='designer@gmail.com' />
                    <p className='error-content'>Error Message</p>
=======
                <div className='mainInput1'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Username</p>
                    <input 
                        type="text" 
                        placeholder='Ngyuen Van A' 
                        name='name'
                        onChange={handleGetValue}
                        value={newUser.name}
                    />
                    <p className='error-content'>{errorInput.errName}</p>
                </div>
                <div className='mainInput1'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Email</p>
                    <input 
                        type="text" 
                        placeholder='designer@gmail.com' 
                        name='email'
                        onChange={handleGetValue}
                        value={newUser.email}
                    />
                    <p className='error-content'>{errorInput.errEmail}</p>
                </div>
                <div className='mainInput1'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Phone</p>
                    <input 
                        type="text" 
                        placeholder='0123456789'    
                        name='phone'
                        onChange={handleGetValue}
                        value={newUser.phone}       
                    />
                    <p className='error-content'>{errorInput.errPhone}</p>
                </div>
                <div className='mainInput1'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Password</p>
                    <input 
                        type="text" 
                        placeholder='Qwerty@123' 
                        name='password'
                        onChange={handleGetValue}    
                        value={newUser.password}
                    />
                    <p className='error-content'>{errorInput.errPass}</p>
                </div>
                <div className='mainInput1'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Confirm Password</p>
                    <input 
                        type="text" 
                        placeholder='Qwerty@123' 
                        name='confirmPassword'
                        onChange={handleGetValue}
                        value={newUser.confirmPassword}    
                    />
                    <p className='error-content'>{errorInput.errConfirm}</p>
>>>>>>> 11fddb8e70f639d8eaf9fbdd9dfab22042182909
                </div>

                {/* <div>
                    <div className='mainInput2-sign-up'>
                        <div style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                            <p style={{fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Password</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i class="fa-regular fa-eye-slash" style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}></i>
                            <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Hide</p>
                        </div>
                    </div>

                    <div className='mainInput3-sign-up'>
                        <input type="text" />
<<<<<<< HEAD
                        <p className='notice-sign-up'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
=======
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#666666', marginTop: '10px' }}>Use 8 or </p>
>>>>>>> 11fddb8e70f639d8eaf9fbdd9dfab22042182909
                    </div>

                </div> */}

                <div className='main-button'>
                    <div className='main-button-sign-up'>
                        <button onClick={handleRegister} className='main-button-signin'>Sign Up</button>
                    </div>

                    <div className='main-content-end'>
                        <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Already have an account? <Link to="/sign-in"><span style={{ color: '#3c4242', textDecoration: 'underline' }}>Log in</span></Link></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
