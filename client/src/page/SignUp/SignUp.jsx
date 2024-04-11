import React, { useEffect } from 'react'
import ImageSu from '../../../public/images/Imagesu.png'
import Google from '../../../public/images/Google.png'
import Twitter from '../../../public/images/twitter.png'
import Divider from '../../../public/images/divider.png'
import './SignUp.scss'

export default function SignUp() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mainBody'>
            <div className='mainImage'>
                <img src={ImageSu} className='image' alt="" />
            </div>

            <div className='mainContent'>
                <div className='mainTitle'>Sign Up
                </div>
                <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Sign up for free to access to in any of our products </p>

                <div className='mainButton'>
                    <img className='mainButtonImage' src={Google} alt="" />
                    <button>Continue With Google</button>

                    <div className='mainButton2' >
                        <img className='mainButtonImage1' src={Twitter} alt="" />
                        <button>Continue With Twitter</button>
                    </div>
                </div>

                {/* <div className='divider'>
                    <img src={Divider} alt="" />
                </div> */}

                <div className='mainInput1'>
                    <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Email Address</p>
                    <input type="text" placeholder='designer@gmail.com' />
                    <p className='error-content'>Error Message</p>
                </div>

                <div>
                    <div className='mainInput2-sign-up'>
                        <div style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
                            <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Password</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <i class="fa-regular fa-eye-slash" style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}></i>
                            <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Hide</p>
                        </div>
                    </div>

                    <div className='mainInput3-sign-up'>
                        <input type="text" />
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#666666', marginTop: '10px' }}>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </div>

                </div>

                <div className='main-checkbox-content-signup'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input style={{ width: '15px', height: '15px' }} type="checkbox" /> 
                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#666666' }}>Agree to our <span style={{ color: '#3c4242', textDecoration: 'underline' }}>Terms of use</span> and <span style={{ color: '#3c4242', textDecoration: 'underline' }}>Privacy Policy</span> </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px',marginTop: '10px' }}>
                        <input style={{ width: '15px', height: '15px' }} type="checkbox" /> 
                        <p style={{ fontSize: '16px', fontWeight: '500', color: '#666666' }}> Subscribe to our monthly newsletter </p>
                    </div>
                </div>

                <div className='main-button-sign-up'>
                    <button className='main-button-signin'>Sign Up</button>
                </div>

                <div className='main-content-end'>
                    <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Already have an account? <span style={{ color: '#3c4242', textDecoration: 'underline' }}>Log in</span></p>
                </div>
            </div>
        </div>
    )
}
