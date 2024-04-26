import { useEffect, useState } from "react";

export const useAuth = (isRegister) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    useEffect(() => {
        const regexName = /^.{4,}$/;
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const regexPhone = /^(0|\+84)\d{9,10}$/;
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

        if (!regexName.test(name)) {
            setNameError("Tên phải từ 4 kí tự trở lên");
        }else{
            setNameError("");
        }

        if (!regexEmail.test(email)) {
            setEmailError("Email không hợp lệ");
        }else{
            setEmailError("");
        }

        if (!regexPhone.test(phone)) {
            setPhoneError("Số điện thoại phải có 10 số");
        }else{
            setPhoneError("");
        }

        if (!regexPass.test(password)) {
            setPasswordError("Mật khẩu phải có 6 kí tự trở lên và có cả chữ số");
        }else{
            setPasswordError("");
        }

        if(isRegister){
            if (!(password == confirmPassword)) {
                setConfirmPasswordError("Mật khẩu không khớp");
            }else{
                setConfirmPasswordError("");
            }
        }
    }, [name, email, phone, password, confirmPassword, isRegister]);

    return { name, email, phone, password, confirmPassword, nameError, emailError, phoneError, passwordError, confirmPasswordError };
}