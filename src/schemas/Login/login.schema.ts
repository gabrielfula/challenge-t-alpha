import { removeMask } from "@/helpers/utils"
import { z } from "zod"

export const loginFormSchema = z.object({
  taxNumber: z.string()
    .nonempty("CPF ou CNPJ é obrigatório")
    .transform(removeMask),
  password: z.string()
    .nonempty("Senha é obrigatório"),
})

export type loginFormData = z.infer<typeof loginFormSchema>