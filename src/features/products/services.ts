import axiosInstance from "../../../config/axionsInstance";
import { Allproducts } from "./types/AllProductesResponse";

export const getAllProducts = async (
  category: "app" | "sim" | "phone"
): Promise<Allproducts> => {
  try {
    const response = await axiosInstance.get(
      `/products/?lang=en&category=${category}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
