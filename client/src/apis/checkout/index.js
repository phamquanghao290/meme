import axios from "axios";
import publicAxios from "../../config/PublicAxios";
import { API_CART_BY_USER, API_CREATE_ORDER, API_CREATE_ORDER_DETAIL, APT_DELETE_CART_USER } from "../patchAPI";

export const handleGetCartByUserAPI = async (id) => {
    const response = await publicAxios.get(`${API_CART_BY_USER}/${id}`);
    return response;
}

export const handleCreateOrderAPI = async (order) => {
    const response = await publicAxios.post(API_CREATE_ORDER, order);
    return response;
}

export const handleCreateOrderDetailAPI = async (orderDetail) => {
    const response = await publicAxios.post(API_CREATE_ORDER_DETAIL, orderDetail);
    return response;
}

export const handleDeleteCartUser = async (id) => {
    const response = await publicAxios.delete(`${APT_DELETE_CART_USER}/${id}`);
    return response;
}
