import { productFormData } from "@/schemas/Products/products.schema";
import { authInstance } from "./axios";

export class ProductService {
  static async list() {
    try {
      const response = await authInstance({
        method: "GET",
        url: "products/get-all-products",
      })

      return response.data.data;
    } catch (error) {
      throw error
    }
  }

  static async create(data: productFormData) {
    try {
      const response = await authInstance({
        method: "POST",
        url: "products/create-product",
        data
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}