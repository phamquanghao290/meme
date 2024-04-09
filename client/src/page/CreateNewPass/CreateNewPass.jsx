import React from 'react'
import './CreateNewPass.scss'
import CreatePass from '../../../public/images/CreateNewPass.png'
export default function CreateNewPass() {
    return (
        <div className='mainBody-create'>
            <div className='mainImage-create'>
                <img src={CreatePass} className='image-create' alt="" />
            </div>

            <div className='mainContent-create'>
                <div className='mainTitle-create'>Create New Password</div>
                <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '400', color: '#676B80', lineHeight: '19px' }}>Your new password must be different from previous used passwords.
                </p>

                <div className='mainInput-create'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Password </p>
                    <input className='input-create' type="password" placeholder='' />
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#666666', marginTop: '10px' }}>Must be at least 8 characters.</p>
                </div>

                <div className='mainInput-confirm'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Confirm Password </p>
                    <input className='input-confirm' type="password" placeholder='' />
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#FF0000', marginTop: '10px' }}>New password and comfirm new password do not match</p>
                </div>

                <div className='main-button-create'>
                    <button className='main-button-create'>Reset Password</button>
                </div>

            </div>
        </div>
    )
}
