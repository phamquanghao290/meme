import publicAxios from "../config/PublicAxios";
import { API_CATEGORY, API_DELETECATEGORYID } from "./patchAPI";



export const getAllCateAPI = async () => {
    const response = await publicAxios.get(API_CATEGORY);
    return response;
}
export const deletCategoryIdAPI= async (id) => {
    const response = await publicAxios.delete(`${API_DELETECATEGORYID}/${id}`);
    return response.data;
}
export const addCategoryAPI = async (data) => {
    const response = await publicAxios.post(API_CATEGORY, data);
    return response.data;
}
export const editCategoryAPI = async (id, data) => {
    const response = await publicAxios.patch(`${API_DELETECATEGORYID}/${id}`, data);
    return response.data;
}