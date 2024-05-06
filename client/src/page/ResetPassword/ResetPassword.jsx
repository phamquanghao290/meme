import React from 'react'
import ResetPass from '../../../public/images/ResetPass.png'
import './ResetPassword.scss'
import { Link, useNavigate } from 'react-router-dom'
import { failed, success } from '../../components/Modal/NotificationModal';
import { API_VERIFY_CHECKMAIL } from '../../apis/patchAPI';
import publicAxios from '../../config/PublicAxios';
export default function ResetPassword() {
    const navigate = useNavigate()
    const [emailInput, setEmailInput] = React.useState({
        email: "",
    });
    const [errorInput, setErrorInput] = React.useState({
        errEmail: "",
    });

    const handleSendEmail = async () => {
        const err = {
            errEmail: "",
        }
        let check = true;
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!regexEmail.test(emailInput.email)){
            failed("Email is not valid");
            check = false;

        }
        if(!check){
            setErrorInput(err);
            return;
        }else{
            const response = await publicAxios.post(API_VERIFY_CHECKMAIL, {to: emailInput.email});
            if(response.data.status){
                localStorage.setItem("token", JSON.stringify(response.data.token));
                success(response.data.message);
            }else{
                failed(response.data.message);
            }
        }
    }

    React.useEffect(() => {
        document.title = "Reset Password";
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <div className='mainBody-resetpass'>
            <div className='mainImage-resetpass'>
                <img src={ResetPass} className='image-resetpass' alt="" />
            </div>

            <div className='mainContent-resetpass'>
                <div className='mainTitle-resetpass'>Reset Your Password</div>
                <p style={{ marginTop: '35px', fontSize: '16px', fontWeight: '400', color: '#676B80', lineHeight: '19px' }}>Enter your email and we'll send you a link to reset your password.
                </p>
                <p style={{ marginTop: '5px', fontSize: '16px', fontWeight: '500', color: '#666666', lineHeight: '19px' }}>Please check it.</p>


                <div className='mainInput-resetpass'>
                    <p style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '400', color: '#3C4242' }}>Email </p>
                    <input className='input-resetpass' type="text" placeholder='focus001@gmail.com' name="email" value={emailInput.email} onChange={(e) => setEmailInput({ ...emailInput, [e.target.name]: e.target.value })} />
                    <p className='error-content-resetpass'>{errorInput.errEmail}</p>
                </div>

                <div className='main-button-reset'>
                    <button className='main-button-reset' onClick={handleSendEmail}>Send</button>
                </div>

                <div className='content-end-resetpass'>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#3C4242' }} >Back to <Link to="/"><span style={{ textDecoration: 'underline' }}>Home</span></Link></p>
                </div>

            </div>
        </div>
    )
}
