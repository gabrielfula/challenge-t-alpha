import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";

const routes = [
  { path: '/', component: LoginPage},
  { path: '/cadastro', component: RegisterPage}
];

export default routes;