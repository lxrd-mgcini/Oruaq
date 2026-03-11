import { loginType, OrderRequestType, ProductResponseType, registerType } from "@/types/API.type";
import API from "./axios-client";

export const registerMutationFn = async (data: registerType) =>
  await API.post("/auth/register", data);

export const loginMutationFn = async (data: loginType) =>
  await API.post("/auth/login", data, {withCredentials:true});

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

export const createOrderMutationFn = async (data: OrderRequestType) =>{

  //Remove other metadata for the product Item 
  const removeMetaData = (order:OrderRequestType) => {
  return {
    ...order,
    items: order.items.map(({ _id, quantity }) => ({ _id, quantity }))
  };
};

const order = removeMetaData(data)

// Rename _id to productId for compatibility with API

const formatOrder = (order:OrderRequestType) => {

  return {
    ...order,
    items: order.items.map(({ _id: productId, quantity }: any) => ({
      productId,
      quantity
    }))
  };
};

const formatedOrder = formatOrder(order)
console.log(formatedOrder)

await API.post("/order", formatedOrder);}
