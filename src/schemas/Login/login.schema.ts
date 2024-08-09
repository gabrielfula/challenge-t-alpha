import { z } from "zod"


export const loginFormSchema = z.object({
  taxNumber: z.string()
    .nonempty("CPF ou CNPJ é obrigatório"),
  password: z.string()
    .nonempty("Senha é obrigatório"),
})

export type loginFormData = z.infer<typeof loginFormSchema>