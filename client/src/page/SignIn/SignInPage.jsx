import React from 'react'
import Image from '../../../public/images/image1.png'
import Google from '../../../public/images/Google.png'
import Twitter from '../../../public/images/twitter.png'
import Divider from '../../../public/images/divider.png'
import './SignInPage.scss'
export default function SignInPage() {
  return (
    <div className='mainBody'>
      <div className='mainImage'>
        <img src={Image} className='image' alt="" />
      </div>

      <div className='mainContent'>
        <div className='mainTitle'>Sign In Page</div>

        <div className='mainButton'>
          <img className='mainButtonImage' src={Google} alt="" />
          <button>Continue With Google</button>

          <div className='mainButton2' >
            <img className='mainButtonImage1' src={Twitter} alt="" />
            <button className='continue-button-signin'>Continue With Twitter</button>
          </div>
        </div>

        <div className='divider'>
          <img src={Divider} alt="" />
        </div>

        <div className='mainInput-sign-in'>
          <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>User name or email address</p>
          <input className='input-sign-in' type="text" />
        </div>

        <div>
          <div className='mainInput2'>
            <div style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
              <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Password</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i class="fa-regular fa-eye-slash" style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}></i>
              <p style={{ marginBottom: '10px', fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Hide</p>
            </div>
          </div>

          <div className='mainInput3'>
            <input className='input3-sign-in' type="text" />
          </div>

          <div>
            <p style={{textAlign: 'right', fontSize: '16px', fontWeight: '400', color: '#3c4242',marginTop: '10px',textDecoration: 'underline'}}>Forgot your password</p>
          </div>
        </div>

        <div className='main-button'>
          <button className='main-button-signin'>Sign In</button>
        </div>

        <div className='main-content-end'>
          <p style={{ fontSize: '16px', fontWeight: '400', color: '#3c4242' }}>Don't have an account? <span style={{ color: '#3c4242', textDecoration: 'underline'}}>Sign up</span></p>
        </div>
      </div>
    </div>
  )
}
