import publicAxios from "../../config/PublicAxios";
import { API_GET_ORDER, API_GET_ORDER_DETAIL } from "../patchAPI";

export const handleGetOrderAPI = async (id) => {
    const response = await publicAxios.get(`${API_GET_ORDER}/${id}`);
    return response;
}

export const handleGetOrderDetailAPI = async (id) => {
    const response = await publicAxios.get(`${API_GET_ORDER_DETAIL}/${id}`);
    return response;
}