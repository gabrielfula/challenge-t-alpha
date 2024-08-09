import { registerFormData } from "@/schemas/Login/register.schema";
import { authInstance } from "./axios";

export class AuthService {
  
  static async login(taxNumber: string, password: string) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "auth/login",
        data: { taxNumber, password }
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async create(data: registerFormData) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "auth/register",
        data
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}