import publicAxios from "../config/PublicAxios";
import { success, failed } from "../components/Modal/NotificationModal";
import { API_REGISTER } from "./patchAPI";
import { useAuth } from "../utils/authLogic";

export const registerService = async () => {
    const {
        name,
        setName,
        setEmail,
        setPhone,
        setPassword,
        email,
        phone,
        password,
        nameError,
        emailError,
        phoneError,
        passwordError,
        confirmPasswordError
    } = useAuth(true);

    const handleRegister = async () => {
        const response = await publicAxios.post(API_REGISTER, {
            name,
            email,
            phone,
            password,
        })
        success(response.data.message);
        setTimeout(() => {
            window.location.href = "/sign-in";
        })
    }

    return {
        name,
        setName,
        setEmail,
        setPhone,
        setPassword,
        email,
        phone,
        password,
        nameError,
        emailError,
        phoneError,
        passwordError,
        confirmPasswordError,
        handleRegister
    }
}


