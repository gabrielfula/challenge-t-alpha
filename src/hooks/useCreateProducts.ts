import { productFormData } from "@/schemas/Products/products.schema";
import { ProductService } from "@/services/product.service";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";


export default  function useCreateProducts() {
  return useMutation({
    mutationFn: async (data: productFormData) => await ProductService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      });
    }
  })
}
