import publicAxios from "../config/PublicAxios";


export const getProductsAPI = async () => {
    const response = await publicAxios.get("/api/product");
    return response;
}
