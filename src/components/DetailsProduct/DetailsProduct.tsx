import { Link } from 'react-router-dom'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export interface IDetailsProduct {
  id: number;
}

export default function DetailsProduct({ id }: IDetailsProduct) {
  return (
    <>
      <Link to={`/admin/produtos/${id}`}>
        <DropdownMenuItem>Detalhes</DropdownMenuItem>
      </Link>
    </>
  )
}
