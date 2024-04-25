import publicAxios from "../config/PublicAxios";

export const login = async (data) => {
    const response = await publicAxios.post("/api/login", data);
    return response.data;
}

export const register = async (data) => {
    const response = await publicAxios.post("/api/register", data);
    return response.data;
}

export const login_google = async (data) => {
    const response = await publicAxios.post("/api/login-google", data);
    return response.data;
}
