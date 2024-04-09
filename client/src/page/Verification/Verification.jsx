import React from 'react'
import './Verification.scss'
import Verifi from '../../../public/images/Verification.png'
export default function Verification() {
    return (
        <div className='mainBody-verifi'>
            <div className='mainImage-verifi'>
                <img src={Verifi} className='image-verifi' alt="" />
            </div>

            <div className='mainContent-verifi'>
                <div className='mainTitle-verifi'>Verification</div>
                <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '400', color: '#676B80', lineHeight: '19px' }}>Verify your code.
                </p>

                <div className='mainInput-verifi'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Verification Code </p>
                    <input type="text" placeholder='' />
                </div>

                <div className='main-button-reset'>
                    <button className='main-button-reset'>Verify Code</button>
                </div>

            </div>
        </div>
    )
}
