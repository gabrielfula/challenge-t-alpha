import { IProducts } from "@/interfaces/products";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export default function ListProducts({ id, name, description, price, stock }: IProducts) {
  
  return (
    <TableBody>
      <TableRow className="text-center">
        <TableCell>{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>R${price}</TableCell>
        <TableCell>{stock} Unidades</TableCell>
        <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <MoveHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
