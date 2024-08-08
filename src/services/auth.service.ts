import { authInstance } from "./axios";

export class AuthService {
  
  static async login(taxNumber: string, password: string) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "auth/login",
        data: {
          taxNumber, password
        }
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}