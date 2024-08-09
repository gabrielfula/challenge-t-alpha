import DetailsPage from "@/pages/DetailsPage/DetailsPage";
import ProductPage from "@/pages/ProductPage/ProductPage";

const routes = [
  { path: "produtos", component: ProductPage },
  { path: "produtos/:id", component: DetailsPage }
]

export default routes;