import publicAxios from "../../config/PublicAxios";
import { API_CART_BY_USER, API_DECREASE_CART, API_DELETE_CART, API_GETPRODUCT_CART, API_INCREASE_CART } from "../patchAPI";

export const handleGetCartAPI = async (id) => {
    const response = await publicAxios.get(`${API_CART_BY_USER}/${id}`);
    return response;
};

export const handleGetProductAPI = async () => {
    const response = await publicAxios.get(API_GETPRODUCT_CART);
    return response;
};

export const handleIncreaseCartAPI = async (item) => {
    const response = await publicAxios.put(API_INCREASE_CART, item);
    return response;
}
export const handleDecreaseCartAPI = async (item) => {
    const response = await publicAxios.put(API_DECREASE_CART, item);
    return response;
}

export const  handleDeleteCartAPI = async (id) => {
    const response = await publicAxios.delete(`${API_DELETE_CART}/${id}`);
    return response;
}

