import publicAxios from "../config/PublicAxios";

export const getAllUser = async () => {
    const response = await publicAxios.get("/api/user");
    return response;
}
export const changeStatusUser = async (id) => {
    const response = await publicAxios.patch(`/api/user/status/${id}`);
    return response;
}