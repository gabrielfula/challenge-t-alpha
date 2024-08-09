import { ProductService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export default function useFetchProducts() {
   return useQuery({
    queryKey: ["products"],
    queryFn: ProductService.list
  })
}
