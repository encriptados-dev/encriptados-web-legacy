import axiosInstance from "../../../config/axionsInstance";
import { Allproducts } from "./types/AllProductesResponse";

export const getAllProducts = async (): Promise<Allproducts> => {
  try {
    const response = await axiosInstance.get("/products/?lang=en");
    return response.data;
  } catch (error) {
    throw error;
  }
};
