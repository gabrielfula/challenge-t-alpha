import { useNavigate } from 'react-router-dom'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export interface IDetailsProduct {
  id: number;
}

export default function DetailsProduct({ id }: IDetailsProduct) {

  const navigate = useNavigate();

  return (
    <>
      <button className='w-full'>
        <DropdownMenuItem onClick={() => navigate(`/produtos/${id}`)}>Detalhes</DropdownMenuItem>
      </button>
    </>
  )
}
