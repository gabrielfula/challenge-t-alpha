import { updateProductFormData } from "@/schemas/Products/update-product.schema";
import { ProductService } from "@/services/product.service";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateProduct() {
  return useMutation({
    mutationFn: async ({ id, data }: { id: number, data: updateProductFormData }) => await ProductService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      });
    }
  })
}
