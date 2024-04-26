import publicAxios from "../config/PublicAxios";
import { API_BRAND } from "./patchAPI";


export const getAllBrandAPI = async () => {
    const response = await publicAxios.get(API_BRAND);
    return response;
}