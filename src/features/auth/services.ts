import { SignUp, SignUpResponse } from "./types/signup";
import { LoginBody, LoginResponse } from "./types/login";
import axiosInstance from "../../../config/axionsInstance";

export const userAuthLogin = async (
  credentials: LoginBody
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = response.data;

    return result;
  } catch (error) {
    throw error;
  }
};

export const userAuthSignUp = async (
  credentials: SignUp
): Promise<SignUpResponse> => {
  try {
    const response = await axiosInstance.post("/users/sign-up", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = response.data;

    return result;
  } catch (error) {
    throw error;
  }
};

export const userAuthJwtRefresh = async () => {
  try {
    const response = await axiosInstance.post("/auth/jwt/refresh", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = response.data;

    return result;
  } catch (error) {
    throw error;
  }
};
