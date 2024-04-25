import publicAxios from "../config/PublicAxios";

export const getAllUser = async () => {
    const response = await publicAxios.get("/api/user");
    return response.data;
}