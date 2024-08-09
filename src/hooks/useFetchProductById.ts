import { ProductService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchProductById(id: number) {
  return useQuery({
    queryKey: ["productById", id],
    queryFn: async () => await ProductService.getById(id),
  });
}