import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import TextInput from "../InputText/InputText";
import { useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormSchema, productFormData } from "@/schemas/Products/products.schema";
import useCreateProducts from "@/hooks/useCreateProducts";
import { useState } from "react";

export default function CreateProduct() {
  const { mutateAsync } = useCreateProducts();
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm<productFormData>({
    resolver: zodResolver(createProductFormSchema),
  });

  const handleCreateProduct = async (data: productFormData) => {
    try {
      reset();
      const response = await mutateAsync(data);

      response && response.success ? setIsOpen(false) : null;
      
      toast({
        title: "Produto criado com sucesso!",
        variant: "default",
      });
      
    } catch (ex: any) {
      toast({
        title: "Não foi possível criar o produto",
        variant: "destructive",
        description: `${ex.response.data.message || "Erro desconhecido"}!`,
      });
    }
  };

  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <Button className="space-x-2" onClick={() => setIsOpen(true)}>
              <Plus color="#fff" strokeWidth={2} size={22} />
              <p>Criar produto</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dados do novo produto</DialogTitle>
              <DialogDescription>
                Adicione nos campos abaixo detalhes do produto.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleCreateProduct)} className="flex flex-col gap-4 my-4">
              <div>
                <TextInput name="name" label="Nome" control={control} placeholder="Ex: Produto de limpeza..." />
              </div>
              <div>
                <TextInput name="description" label="Descrição" control={control} placeholder="Ex: Produto para limpar vidro..." />
              </div>
              <div>
                <TextInput name="price" label="Preço" control={control} placeholder="Ex: R$10,00" />
              </div>
              <div>
                <TextInput name="stock" label="Quantidade" type="number" control={control} placeholder="Ex: 3" />
              </div>
              <Button type="submit" size="sm" className="px-3">Criar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
