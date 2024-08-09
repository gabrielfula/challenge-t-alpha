import { Button } from "@/components/ui/button";

import { useAuth } from "@/context/useAuth";
import { AuthService } from "@/services/auth.service";
import { Link, useNavigate } from "react-router-dom";


import TextInput from "@/components/InputText/InputText";
import { useToast } from "@/components/ui/use-toast";


import { loginFormData, loginFormSchema } from "@/schemas/Login/login.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";


export default function LoginPage() {
  const { login } = useAuth();

  const { toast } = useToast()

  const navigate = useNavigate();

  const { 
    handleSubmit,
    control,
  } = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const handleLogin = async (data: loginFormData) => {
    try {
      const response = await AuthService.login(data.taxNumber, data.password);

      login(response.data.token);
      
      toast({
        title: "Login efetuado",
        variant: "default",
        description: `${response.message}!`
      });

      navigate("/admin/produtos");
    } catch (error: any) {
      toast({
        title: "Não foi possível efetuar o login",
        variant: "destructive",
        description: `${error.response.data.message}!`
      })
    }
  }

  return (
    <div className="w-1/3">
      <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
        <div className="space-y-2">
          <TextInput name="taxNumber" type="text" label={"CPF ou CNPJ"} control={control} placeholder="Ex: 999.999.999-99" />
        </div>
        <div className="space-y-2">
          <TextInput name="password" type="password" label={"Senha"} control={control} placeholder="Ex: ******"  />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Não possui uma conta ainda? 
          <Link to={'/cadastro'} className="font-medium underline underline-offset-4 hover:text-primary pl-1">
            Cadastrar-se
          </Link>
        </p>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}
