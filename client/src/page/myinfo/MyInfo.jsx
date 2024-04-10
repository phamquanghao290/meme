import React from 'react'
import './MyInfo.scss'
export default function MyInfo() {
    return (
        <div className='main-body-info' >
            <div className='main-nav-info'  >
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#807D7E', lineHeight: '22px' }}>Home
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px', marginLeft: '5px' }}></i> </span>
                    <span style={{ marginLeft: '5px' }}>My account</span>
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i> </span>
                    <span style={{ color: '#3C4242', marginLeft: '5px' }}>
                        Personal Info
                    </span>
                </p>
            </div>

            <div className='main-content-info'>
                <div className='main-content-info-left'>
                    <div style={{ display: 'flex', gap: '10px' }} >
                        <p style={{ width: "6px", height: "30px", backgroundColor: "#8A33FD", borderRadius: "5px" }}></p>
                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>Hello Jhanvi</p>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#807D7E', lineHeight: '33px', marginTop: '10px' }}>Welcome to your Account</p>

                    <div className='main-content-info-left-option'>
                        <p >
                            <i class="fa-solid fa-bag-shopping" style={{ color: '#807D7E', fontSize: '18px' }}></i>
                        </p>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My orders</p>
                    </div>
                    <div className='main-content-info-left-option'>
                        <p >
                            <i class="fa-regular fa-heart" style={{ color: '#807D7E', fontSize: '18px', width: '5%' }}></i>
                        </p>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Wishlist</p>
                    </div>
                    <div className='main-content-info-left-option'>
                        <i class="fa-regular fa-user" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My info</p>
                    </div>
                    <div className='main-content-info-left-option'>
                        <i class="fa-solid fa-arrow-right-from-bracket" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Sign out</p>
                    </div>
                </div>

                <div className='main-content-info-right'>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>My Info</h2>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Contact Details</h2>
                    </div>

                    <div className='main-content-info-right-info'>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Your Name</h2>
                        <div style={{ display: 'flex', gap: '30%', marginTop: '10px' }}>
                            <input type="text" className='input-info' placeholder='Jhanvi Shah' />
                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Change</p>
                        </div>
                        <hr style={{ marginTop: '20px', opacity: '0.2' }} />
                    </div>
                    <div className='main-content-info-right-info'>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Email Address</h2>
                        <div style={{ display: 'flex', gap: '30%', marginTop: '10px' }}>
                            <input type="text" className='input-info' placeholder='Jhanvi Shah' />
                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Change</p>
                        </div>
                        <hr style={{ marginTop: '20px', opacity: '0.2' }} />
                    </div>
                    <div className='main-content-info-right-info'>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Phone Number</h2>
                        <div style={{ display: 'flex', gap: '30%', marginTop: '10px' }}>
                            <input type="text" className='input-info' placeholder='Jhanvi Shah' />
                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Change</p>
                        </div>
                        <hr style={{ marginTop: '20px', opacity: '0.2' }} />
                    </div>
                    <div className='main-content-info-right-info'>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Password</h2>
                        <div style={{ display: 'flex', gap: '30%', marginTop: '10px' }}>
                            <input type="text" className='input-info' placeholder='Jhanvi Shah' />
                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Change</p>
                        </div>
                        <hr style={{ marginTop: '20px', opacity: '0.2' }} />
                    </div>

                    <div className='main-content-info-right-bottom' style={{ marginTop: '30px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Address</h2>
                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#3C4242', lineHeight: '33px' }}>Add New</p>

                    </div>

                    <div className='main-content-info-right-addnew'>
                        <div className='main-content-info-right-addnew-info'>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '10px' }}>Jhanvi Shah</h2>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>821741847</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                derasar, Vijaynagar road </p>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '15px',display:'flex',gap:'20px' }}>
                                <p>Remove</p>
                                <hr />
                                <p>Edit</p>
                            </div>
                        </div>
                        <div className='main-content-info-right-addnew-info'>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '10px' }}>Jhanvi Shah</h2>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>821741847</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                derasar, Vijaynagar road </p>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '15px',display:'flex',gap:'20px' }}>
                                <p>Remove</p>
                                <hr />
                                <p>Edit</p>
                            </div>
                        </div>
                        <div className='main-content-info-right-addnew-info'>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '10px' }}>Jhanvi Shah</h2>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>821741847</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                derasar, Vijaynagar road </p>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '15px',display:'flex',gap:'20px' }}>
                                <p>Remove</p>
                                <hr />
                                <p>Edit</p>
                            </div>
                        </div>
                        <div className='main-content-info-right-addnew-info'>
                            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '10px' }}>Jhanvi Shah</h2>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>821741847</p>
                            <p style={{ fontSize: '16px', fontWeight: '500', color: '#807D7E', lineHeight: '21px', marginTop: '15px' }}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain
                                derasar, Vijaynagar road </p>
                            <div style={{ fontSize: '16px', fontWeight: '600', color: '#3C4242', lineHeight: '21px', marginTop: '15px',display:'flex',gap:'20px' }}>
                                <p>Remove</p>
                                <hr />
                                <p>Edit</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
