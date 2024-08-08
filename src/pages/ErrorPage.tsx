import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg text-gray-700 mb-8">Desculpe, a página que você está procurando não existe.</p>
      <button
        onClick={handleGoBack}
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Voltar para a Página Inicial
      </button>
    </div>
  );
}
