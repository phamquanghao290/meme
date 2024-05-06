import publicAxios from "../config/PublicAxios";
import { API_PRODUCT, API_PRODUCTID, API_SEARCHPRODUCTS } from "./patchAPI";


export const getProductsAPI = async () => {
    const response = await publicAxios.get(API_PRODUCT);
    return response;
}
export const getProductsIDAPI = async (id) => {
    const response = await publicAxios.get(`${API_PRODUCTID}/${id}`);
    return response;
}
export const deleteProductsAPI= async (id) => {
    const response = await publicAxios.delete(`${API_PRODUCTID}/${id}`);
    return response.data;
}
export const putProductsAPI = async (id,data) => { 
    const response = await publicAxios.put(`${API_PRODUCTID}/${id}`,data );
    return response.data;
}
export const addProductsAPI = async (data) => {
    const response = await publicAxios.post(API_PRODUCT, data);
    return response.data;
}
export const searchProductsAPI = async (data) => {
    const response = await publicAxios.get(API_SEARCHPRODUCTS+`?key=${data}`);
    return response.data;
}

