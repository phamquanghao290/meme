import React from 'react'
import '../wishlist/Wishlist.scss'
import Rectangle21 from '../../../public/images/Rectangle 21.png'
export default function Wishlist() {
    return (
        <div className='main-body-wishlist' >
            <div className='main-nav-wishlist'  >
                <p style={{ fontSize: '18px', fontWeight: '500', color: '#807D7E', lineHeight: '22px' }}>Home
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px', marginLeft: '5px' }}></i> </span>
                    <span style={{ marginLeft: '5px' }}>My account</span>
                    <span> <i class="fa-solid fa-chevron-right" style={{ fontSize: '12px' }}></i> </span>
                    <span style={{ color: '#3C4242', marginLeft: '5px' }}>
                        Wishlist
                    </span>
                </p>
            </div>

            <div className='main-content-wishlist'>
                <div className='main-content-wishlist-left'>
                    <div style={{ display: 'flex', gap: '10px' }} >
                        <img src={Rectangle21} alt="" />
                        <p style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>Hello Jhanvi</p>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: '400', color: '#807D7E', lineHeight: '33px', marginTop: '10px' }}>Welcome to your Account</p>

                    <div className='main-content-wishlist-left-option'>
                        <p >
                            <i class="fa-solid fa-bag-shopping" style={{ color: '#807D7E', fontSize: '18px' }}></i>
                        </p>
                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My orders</p>
                    </div>
                    <div className='main-content-wishlist-left-option'>
                        <p >
                            <i class="fa-regular fa-heart" style={{ color: '#807D7E', fontSize: '18px', width: '5%' }}></i>
                        </p>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Wishlist</p>
                    </div>
                    <div className='main-content-wishlist-left-option'>
                        <i class="fa-regular fa-user" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>My info</p>
                    </div>
                    <div className='main-content-wishlist-left-option'>
                        <i class="fa-solid fa-arrow-right-from-bracket" style={{ color: '#807D7E', fontSize: '18px' }}></i>

                        <p style={{ fontSize: '18px', fontWeight: '600', color: '#807D7E', lineHeight: '21px' }}>Sign out</p>
                    </div>
                </div>

                <div className='main-content-wishlist-right'>
                    <div>
                        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#3C4242', lineHeight: '33px' }}>Wishlist</h2>
                    </div>

                    <div className='main-content-wishlist-right-item'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i class="fa-solid fa-x"></i>
                        </div>

                        <div className='main-content-wishlist-right-image'>
                            <img className='image-wishlist' src="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__" alt="" />
                        </div>

                        <div className='main-content-wishlist-right-info'>
                            <p>Blue Flower Print Crop Top </p>
                            <p>Color : <span style={{ color: '#807D7E', fontWeight: '500' }}>Yellow</span></p>
                            <p>Quantity : <span style={{ color: '#807D7E', fontWeight: '500' }}>1</span></p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#807D7E', lineHeight: '26px' }}>$29.00</h4>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='main-content-wishlist-right-button'>Add to cart</button>
                        </div>

                    </div>
                    <hr style={{ width: '100%', color: '#807D7E', opacity: '0.6', marginTop: '30px' }} />
                    <div className='main-content-wishlist-right-item'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <i class="fa-solid fa-x"></i>
                        </div>

                        <div className='main-content-wishlist-right-image'>
                            <img className='image-wishlist' src="https://s3-alpha-sig.figma.com/img/1d49/8085/cd056686e79c2dee4de64329271d3aac?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLNhWWxV8bB~xVZDPS5OujeCJMbtwy3tbJi-c2Q-kv8v8HlKXNAUXbvNMlWdtAwBLQPsy1fWazXp1w~XyLUx-VLlSbFRNa1nYvoWph269I62Eq-XXkQR7kSY-bjaI~ycPwcNKpUquBfoDb0mcQs6ALT3uAhnuM14zekyqv8IFjG1~r-egaaDVo8bbS-lkgExW0LH7QTULVqTaIHTM0MLPDULQJnR0Q8GI-6xa1E5TrZX8~E9CXtiBGO~IInXKome32ibC1QIQWbYqMK6KlIDYBgOu0BVC25DdjnZV6kjWQw96Jg79ofiwt5FZxTaup-mqdNaCbp8vrHgT~F2d~FCHg__" alt="" />
                        </div>

                        <div className='main-content-wishlist-right-info'>
                            <p>Blue Flower Print Crop Top </p>
                            <p>Color : <span style={{ color: '#807D7E', fontWeight: '500' }}>Yellow</span></p>
                            <p>Quantity : <span style={{ color: '#807D7E', fontWeight: '500' }}>1</span></p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#807D7E', lineHeight: '26px' }}>$29.00</h4>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='main-content-wishlist-right-button'>Add to cart</button>
                        </div>

                    </div>

                </div>

            </div>

            <div className='main-content-wishlist-bottom'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ width: "6px", height: "30px", backgroundColor: "red", borderRadius: "5px" }}></p>
                    <p style={{ marginLeft: "10px", fontWeight: "700", color: "#3C4242", fontSize: "24px" }}>Recently Viewed</p>
                </div>

                <div className='main-content-wishlist-bottom-item'>
                    <div>
                        <img className='image-wishlist-recently' src="https://s3-alpha-sig.figma.com/img/6379/ec3b/812827165340eeef5c87585c73ad24ad?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HKXUxR7W8RoYqD4uWK7m1iKXFaGsCGlQvxcKgwpiHGQplYYJRmsQ8vvU3YR7bPiEngQtaNnM2s9q95fUSHnu1ZGS2TAq~Th6q2V9nl4eYtwdWR21AqU~4DYH1MEBRRjvBWJaXuksemfDt4677G4Iev~-s8vdA2yAtnRZNCjqHe0v6SJaDyunB9pZLdl9~U8Sty5k8BJEM~2UUvT0~HIRz~guEbbFnfuE2hWn6leU5t3hOEodKfwWTs6gIjt4KiOFWptSOO1FrcWTcvBgMo9yAoLv9UpdrfkicywGQEcgECbRkaQibaVoZL33QMeCA0IFf2vHdtnwd-5uOzaFpx~xoQ__" alt="" />
                    </div>
                    <div className='main-content-wishlist-bottom-info'>
                        <div className='main-content-wishlist-bottom-info-text'>
                            <p>White T-Shirt</p>
                            <p style={{ color: '#807D7E', fontWeight: '500' }}>Priya’s  Brand</p>
                        </div>
                        <div>
                            <p style={{ color: '#807D7E', fontWeight: '500' }}>$29.00</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
