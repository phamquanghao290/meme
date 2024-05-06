import publicAxios from "../config/PublicAxios";
import { API_BRAND } from "./patchAPI";


export const getAllBrandAPI = async () => {
    const response = await publicAxios.get(API_BRAND);
    return response;
}

export const deleteBrandAPI = async (id) => {
    const response = await publicAxios.delete(`${API_BRAND}/${id}`);
    return response;
}

export const addBrandAPI = async (data) => {
    const response = await publicAxios.post(API_BRAND, data);
    return response;
}

export const editBrandAPI = async (id, data) => {
    const response = await publicAxios.patch(`${API_BRAND}/${id}`, data);
    return response;
}

