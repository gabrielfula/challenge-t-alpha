import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/useAuth";
import { useForm } from "react-hook-form";
import { AuthService } from "@/services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {

  const { toast } = useToast()

  const { login } = useAuth();

  const navigate = useNavigate()

  const { handleSubmit, register } = useForm();

  const handleLogin = async (data: any) => {
    try {
      const response = await AuthService.login(data.taxNumber, data.password);

      login(response.data.token);
      
      toast({
        title: "Login efetuado",
        variant: "default",
        description: `${response.message}!`
      });

      navigate("/admin/home")
      
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
            <Label>CPF ou CNPJ</Label>
            <Input type="text" placeholder="Ex: 9999999999" required {...register("taxNumber")} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" placeholder="Ex: ******" required {...register("password")}  />
          </div>
          <p className="text-center text-sm text-muted-foreground">
          Não possui uma conta ainda? 
          <Link to={'/cadastro'} className="font-medium underline underline-offset-4      hover:text-primary pl-1">
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
