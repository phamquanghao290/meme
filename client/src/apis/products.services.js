import publicAxios from "../config/PublicAxios";

export const login_google = async (data) => {
    const response = await publicAxios.post("", data);
    return response.data;
}