import React from 'react'
import Checkmail from '../../../public/images/Checkmail.png'
import './CheckEmail.scss'
export default function CheckEmail() {
    return (
        <div className='mainBody-checkmail'>
            <div className='mainImage-checkmail'>
                <img src={Checkmail} className='image-checkmail' alt="" />
            </div>

            <div className='mainContent-checkmail'>
                <div className='mainTitle-checkmail'>Check Email</div>
                <p style={{ marginTop: '45px', fontSize: '16px', fontWeight: '500', color: '#666666', lineHeight: '19px' }}>Please check your email inbox and click on the provided link to reset your
                    password . If you don’t receive email, <span style={{ color: '#8A33FD', fontWeight: '700' }}>Click here to resend</span>
                </p>

                <div className='content-end-checkmail'>
                    <i class="fa-solid fa-chevron-left" style={{ color: '#807D7E', fontWeight: '700', fontSize: '12px' }}></i>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E' }}>Back to <span style={{ textDecoration: 'underline' }}>Login</span></p>
                </div>

            </div>
        </div>
    )
}
