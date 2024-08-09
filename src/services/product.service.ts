import { productFormData } from "@/schemas/Products/products.schema";
import { authInstance } from "./axios";
import { updateProductFormData } from "@/schemas/Products/update-product.schema";

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

  static async getById(id: number) {
    try {
      const response = await authInstance({
        method: "GET",
        url: `products/get-one-product/${id}`,
      })

      return response.data;
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

  static async delete(id: number) {
    try {
      const response = await authInstance({
        method: "DELETE",
        url: `products/delete-product/${id}`,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }

  static async update(id: number, data: updateProductFormData) {
    try {
      const response = await authInstance({
        method: "PATCH",
        url: `products/update-product/${id}`,
        data,
      })

      return response.data;
    } catch (error) {
      throw error
    }
  }
}