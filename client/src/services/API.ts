import { ProductResponseType, registerType } from "@/types/API.type";
import API from "./axios-client";

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);


export const getAllProductsQueryFn = async () => {
  try {
    const response = await API.get('/products');
    console.log("request sent")
    console.log(response)
    return response.data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export const getProductByIdQueryFn = async (
  productId: string
): Promise<ProductResponseType> => {
 
    const response = await API.get(`/products/${productId}`);
    console.log("request sent")
    console.log(response)
    return response.data;
  
};
