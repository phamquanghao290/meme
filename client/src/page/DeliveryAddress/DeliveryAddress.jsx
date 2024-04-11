import React, { useEffect } from 'react'
import './DeliveryAddress.scss'
export default function DeliveryAddress() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-body-delivery' >
            <div className='main-nav-delivery'  >
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#807D7E', lineHeight: '22px' }}>Home
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px', marginLeft: '5px' }}></i> </span>
                    <span style={{ marginLeft: '5px' }}>My account</span>
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i> </span>
                    <span style={{ color: '#3C4242', marginLeft: '5px' }}>
                        Delivery Address
                    </span>
                </p>
            </div>

            <div className='main-content-delivery'>
                <div className='main-content-delivery-left'>
                    <div style={{ display: 'flex', gap: '10px' }} >
                        <p style={{ width: "6px", height: "30px", backgroundColor: "#8A33FD", borderRadius: "5px" }}></p>
                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>Hello Jhanvi</p>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#807D7E', lineHeight: '33px', marginTop: '10px' }}>Welcome to your Account</p>

                    <div className='main-content-delivery-left-option'>
                        <p >
                            <i class="fa-solid fa-bag-shopping" style={{ color: '#807D7E', fontSize: '18px' }}></i>
                        </p>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My orders</p>
                    </div>
                    <div className='main-content-delivery-left-option'>
                        <p >
                            <i class="fa-regular fa-heart" style={{ color: '#807D7E', fontSize: '18px', width: '5%' }}></i>
                        </p>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Wishlist</p>
                    </div>
                    <div className='main-content-delivery-left-option'>
                        <i class="fa-regular fa-user" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My delivery</p>
                    </div>
                    <div className='main-content-delivery-left-option'>
                        <i class="fa-solid fa-arrow-right-from-bracket" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Sign out</p>
                    </div>
                </div>

                <div className='main-content-delivery-right'>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>My Info</h2>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '33px', marginTop: '10px' }}>Add Address</h2>
                    </div>

                    <div className='main-content-delivery-right-option'>
                        <div>
                            <div>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>First Name*</h2>
                                <input type="text" placeholder='First Name' className='input-delivery' />
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Country / Region*</h2>
                                <input type="text" placeholder='Country / Region' className='input-delivery' />
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Street Address*</h2>
                                <input type="text" placeholder='House number and street name' className='input-delivery' />
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>City*</h2>
                                <input type="text" placeholder='Town / City' className='input-delivery' />
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Phone*</h2>
                                <input type="text" placeholder='Phone' className='input-delivery' />
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Last Name*</h2>
                                <input type="text" placeholder='Last Name' className='input-delivery' />
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Company Name</h2>
                                <input type="text" placeholder='Company (optional)' className='input-delivery' />
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Apt, suite, unit</h2>
                                <input type="text" placeholder='apartment, suite, unit, etc. (optional)' className='input-delivery' />
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>State*</h2>
                                <input type="text" placeholder='State' className='input-delivery' />
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Postal Code*</h2>
                                <input type="text" placeholder='Postal Code' className='input-delivery' />
                            </div>

                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <div>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '28px' }}>Delivery Instruction</h2>
                            <input type="text" placeholder='Delivery Instruction' className='input-delivery-instruction' />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input style={{ width: '15px', height: '15px' }} type="checkbox" />
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#666666' }}>Agree to our <span style={{ color: '#3c4242', textDecoration: 'underline' }}>Terms of use</span> and <span style={{ color: '#3c4242', textDecoration: 'underline' }}>Privacy Policy</span> </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
