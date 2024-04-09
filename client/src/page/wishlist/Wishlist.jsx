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
                    
                </div>
            </div>
        </div>
    )
}
