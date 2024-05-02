import publicAxios from "../config/PublicAxios";
import { API_DELETEFAVORIT, API_FAVORITE, API_FAVORITID } from "./patchAPI";



export const AddToWishListAPI= async (id,idProduct) => {
    const response = await publicAxios.post(`${API_FAVORITE}/${id}`, {id:idProduct});
    return response;
}
export const getWishListAPIID = async (id) => { 
    const response = await publicAxios.get(`${API_FAVORITID}/${id}`);
    return response;
}
export const deleteWishListAPI = async (id) => {
    const response = await publicAxios.delete(`${API_DELETEFAVORIT}/${id}`);
    return response;
}