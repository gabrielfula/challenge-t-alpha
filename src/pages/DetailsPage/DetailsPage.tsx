import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useFetchProductById from "@/hooks/useFetchProductById";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function DetailsPage() {

  const { id } = useParams();

  const { data: response, isLoading, error } = useFetchProductById(Number(id));

  const navigate = useNavigate()

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
            <Button className="space-x-2" onClick={() => navigate("/produtos")}>
              <ArrowLeft color="#fff" strokeWidth={2} size={22} />
              Voltar
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
