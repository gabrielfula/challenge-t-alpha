import TextInput from "@/components/InputText/InputText";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useCreateUser from "@/hooks/useCreateUser";
import { registerFormData, registerFormSchema } from "@/schemas/Login/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

  const { mutateAsync } = useCreateUser();

  const navigate = useNavigate()

  const { 
    handleSubmit,
    control,
  } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema)
  });

  const handleCreateUser = async (data: registerFormData) => {
    try {
      await mutateAsync(data);

      toast({
        title: "Usuário cadastrado com sucesso!",
        variant: "default",
      });

      navigate("/");
      
    } catch (ex: any) {
      toast({
        title: "Não foi possível concluir o cadastro",
        variant: "destructive",
        description: `${ex.message || "Erro desconhecido"}!`,
      });
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="grid grid-cols-12 gap-4 mb-5">
          <div className="grid col-span-6">
            <TextInput name="name" type="text" label="Nome" control={control} placeholder="Nome do usuário..." />
          </div>
          <div className="grid col-span-6">
            <TextInput name="password" type="password" label="Senha" control={control} placeholder="Senha..." />
          </div>
          <div className="grid col-span-4">
            <TextInput name="taxNumber" type="text" label="CPF ou CNPJ" control={control} placeholder="###.###.###.##" />
          </div>
          <div className="grid col-span-4">
            <TextInput name="phone" type="text" label="Telefone" control={control} placeholder="Telefone do usuário..." />
          </div>
          <div className="grid col-span-4">
            <TextInput name="mail" type="email" label="E-mail" control={control} placeholder="E-mail do usuário" />
          </div>
        </div>  
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
