import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useFetchProductById from "@/hooks/useFetchProductById";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function DetailsPage() {

  const { id } = useParams();

  const { data: response, isLoading, error } = useFetchProductById(Number(id));

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
            <CardTitle>Detalhes do Produto</CardTitle>
            <CardDescription>Detalhes específico de cada produto.</CardDescription>
          </CardHeader>
          <div>
            <Button className="space-x-2">
              <ArrowLeft color="#fff" strokeWidth={2} size={22} />
              <Link to="/produtos" className="">Voltar</Link>
            </Button>
          </div>
        </div> 
        <CardContent>
          <div className="mt-7 flex gap-16">
            <div className="flex gap-2">
              <p className="font-bold">Nome: </p>
              <p>{response.data.product.name}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Descrição: </p>
              <p>{response.data.product.description}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Preço: </p>
              <p>R${response.data.product.price}</p>
            </div>
            <div className="flex gap-2">
              <p className="font-bold">Quantidade disponível: </p>
              <p>{response.data.product.stock}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
