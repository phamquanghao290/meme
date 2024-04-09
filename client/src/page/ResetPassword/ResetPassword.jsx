import React from 'react'
import ResetPass from '../../../public/images/ResetPass.png'
import './ResetPassword.scss'
export default function ResetPassword() {
    return (
        <div className='mainBody-resetpass'>
            <div className='mainImage-resetpass'>
                <img src={ResetPass} className='image-resetpass' alt="" />
            </div>

            <div className='mainContent-resetpass'>
                <div className='mainTitle-resetpass'>Reset Your Password</div>
                <p style={{ marginTop: '35px', fontSize: '16px', fontWeight: '400', color: '#676B80', lineHeight: '19px' }}>Enter your email and we'll send you a link to reset your password.
                </p>
                <p style={{ marginTop: '5px', fontSize: '16px', fontWeight: '500', color: '#666666', lineHeight: '19px' }}>Please check it.</p>


                <div className='mainInput-resetpass'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Email </p>
                    <input className='input-resetpass' type="text" placeholder='focus001@gmail.com' />
                    <p className='error-content-resetpass'>We can not find your email.</p>
                </div>

                <div className='main-button-reset'>
                    <button className='main-button-reset'>Send</button>
                </div>

                <div className='content-end-resetpass'>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#3C4242' }} >Back to <span style={{ textDecoration: 'underline' }}>Login</span></p>
                </div>

            </div>
        </div>
    )
}
