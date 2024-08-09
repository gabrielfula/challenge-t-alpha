import { z } from "zod";

export const updateProductFormSchema = z.object({
  name: z.string().transform((val) => val === "" ? undefined : val),
  description: z.string().transform((val) => val === "" ? undefined : val),
  price: z.coerce.number()
    .nonnegative("Valor não pode ser negativo")
    .transform((val) => val === 0 ? undefined : val),
  stock: z.coerce.number()
    .nonnegative("Estoque não pode ser negativo")
    .transform((val) => val === 0 ? undefined : val),
  }).refine((data) => Object.keys(data).some(key => data[key as keyof typeof data] !== undefined), {
    message: "Pelo menos um campo deve ser preenchido",
  });

export type updateProductFormData = z.infer<typeof updateProductFormSchema>;
