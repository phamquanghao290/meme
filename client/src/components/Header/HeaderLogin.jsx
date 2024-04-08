import React from 'react'
import './HeaderLogin.scss'
import Euphoria from '../../../public/images/Logo.png'
export default function HeaderLogin() {
    return (
        <div className='mainHeader'>
            <div className='mainTopHeader'>
                <div className='header-logo'>
                    <img className='header-wrap-logo' src={Euphoria} alt="" />
                </div>

                <div className='header-search'>
                    <i class="fa-solid fa-magnifying-glass" color='##f6f6f6' ></i>
                    <input className='header-menu' placeholder='Search' type="text"  />
                </div>

                <div className='header-language' >
                    <p className='header-content'>English (United Stated) <i class="fa-solid fa-caret-down"></i></p>
                </div>

                <div className='header-button'>
                    <button className='header-button-login'>Login</button>
                </div>

                <div className='header-button-end'>
                    <button className='header-button-signup'>Sign Up</button>
                </div>

            </div>
            
        </div>
    )
}
