import { ProductService } from "@/services/product.service";
import { queryClient } from "@/services/react-query";
import { useMutation } from "@tanstack/react-query";

export default function useDeleteProduct() {
  return useMutation({
    mutationFn: async (id: number) => await ProductService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      });
    }
  })
}
