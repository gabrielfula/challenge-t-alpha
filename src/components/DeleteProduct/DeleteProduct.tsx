import { DropdownMenuItem } from "../ui/dropdown-menu";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useDeleteProduct from "@/hooks/useDeleteProduct";
import { toast } from "../ui/use-toast";

interface IDeleteProduct {
  name: string;
  id: number;
}

export default function DeleteProduct({ name, id }: IDeleteProduct) {

  const { mutateAsync } = useDeleteProduct()

  const handleDelete = async (id: number) => {

    try {
      await mutateAsync(id);

      toast({
        title: "Excluído",
        variant: "default",
        description: "Produto excluído com sucesso",
      });
    } catch (ex: any) {
      toast({
        title: "Não foi possível criar o produto",
        variant: "destructive",
        description: `${ex.response.data.message || "Erro desconhecido"}!`,
      });
    }
  }

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent w-full focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              Deletar
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Confirmar exclusão</DialogTitle>
              <DialogDescription>
                Você tem certeza que deseja excluir o produto <span className="font-semibold">{name}</span> ?
              </DialogDescription>
            </DialogHeader>
            <div>
              <Button type="submit" size="sm" className="px-3" onClick={() => handleDelete(id)}>Excluir</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
