import CreateProduct from "@/components/CreateProduct/CreateProduct";
import Error from "@/components/Error/Error";
import ListProducts from "@/components/ListProducts/ListProducts"
import Loading from "@/components/Loading/Loading";
import TableHeadRow from "@/components/TableHeadRow/TableHeadRow"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableCaption,
} from "@/components/ui/table"

import useFetchProducts from "@/hooks/useFetchProducts"
import { IProducts } from "@/interfaces/products";


export default function ProductPage() {

  const { data, isLoading, error } = useFetchProducts();

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <>
      <Card>
        <div className="flex justify-between items-center pr-16">
          <CardHeader>
            <CardTitle>Produtos</CardTitle>
            <CardDescription>Painel de gerenciamento de todos os produtos.</CardDescription>
          </CardHeader>
          <div>
            <CreateProduct />
          </div>
        </div> 
        <CardContent>
          <Table>
            <TableCaption>Uma lista de todos os produtos.</TableCaption>
            <TableHeadRow head={["Id", "Nome", "Descrição", "Valor", "Disponíveis"]}/>
            {data.products.map((item: IProducts) => (
              <ListProducts 
                key={item.id}
                id={item.id} 
                name={item.name} 
                description={item.description} 
                price={item.price}
                stock={item.stock}
              />
            ))}
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
