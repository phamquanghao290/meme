import React from 'react'
import './Verification.scss'
import Verifi from '../../../public/images/Verification.png'
import publicAxios from '../../config/PublicAxios';

export default function Verification() {
    const tokenEmail = JSON.parse(localStorage.getItem("token")    );
    const [dataInput, setDataInput] = React.useState({
        email: "",
        password: "",
    })

    const handleGetValue = (e) => {
        setDataInput({ ...dataInput, [e.target.name]: e.target.value });
    }

    const handleForgotPassword = async () => {
        console.log(dataInput)
        const response = await publicAxios.post('/api/forgot-password', {...dataInput, token: tokenEmail});

    }

    React.useEffect(() => {
        document.title = "Verification";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='mainBody-verifi'>
            <div className='mainImage-verifi'>
                <img src={Verifi} className='image-verifi' alt="" />
            </div>

            <div className='mainContent-verifi'>
                <div className='mainTitle-verifi'>Reset Password</div>
                <p style={{ marginTop: '20px', fontSize: '16px', fontWeight: '400', color: '#676B80', lineHeight: '19px' }}>Verify your code.
                </p>

                <div className='mainInput-verifi'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Your email </p>
                    <input className='input-verifi' type="text" placeholder='' name='email' value={dataInput.email} onChange={handleGetValue}/>
                </div><br />

                <div className='mainInput-verifi'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Password</p>
                    <input className='input-verifi' type="text" placeholder='' name='password' value={dataInput.password} onChange={handleGetValue}/>
                </div><br />

                <div className='mainInput-verifi'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Confirm Password</p>
                    <input className='input-verifi' type="text" placeholder='' name='password' value={dataInput.password} onChange={handleGetValue}/>
                </div><br />

                <div className='main-button-reset'>
                    <button className='main-button-reset' onClick={handleForgotPassword}>Verify Code</button>
                </div>

            </div>
        </div>
    )
}
