import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import TextInput from "../InputText/InputText";
import { toast } from "../ui/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateProductFormData, updateProductFormSchema } from "@/schemas/Products/update-product.schema";
import useUpdateProduct from "@/hooks/useUpdateProduct";
import { useState } from "react";

export interface IEditProduct {
  id: number;
}

export default function EditProduct({ id }: IEditProduct) {
  const { mutateAsync } = useUpdateProduct();
  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset } = useForm<updateProductFormData>({
    resolver: zodResolver(updateProductFormSchema),
  });

  const handleUpdateProduct = async (data: updateProductFormData) => {
    try {
      reset();
      await mutateAsync({ id, data });
      setIsOpen(false);
        
      toast({
        title: "Produto editado com sucesso!",
        variant: "default",
      });
      
    } catch (ex: any) {
      toast({
        title: "Não foi possível atualizar o produto",
        variant: "destructive",
        description: `${ex.response.data.message || "Erro desconhecido"}!`,
      });
    }
  };

  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full">
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent w-full focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" onClick={() => setIsOpen(true)}>
              Editar
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dados para atualizar produto</DialogTitle>
              <DialogDescription>
                Adicione nos campos abaixo detalhes do produto editado.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateProduct)} className="flex flex-col gap-4 my-4">
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
              <Button type="submit" size="sm" className="px-3">Salvar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
