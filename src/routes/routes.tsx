import { Route, Routes } from "react-router-dom"

import publicRoutes from "./public.route"
import adminRoutes from "./admin.route"

import ProtectedRoutes from "@/layouts/PrivateRoute/ProtectedRoute";
import AdminLayout from "@/layouts/PrivateRoute/AdminLayout";
import PublicRoutes from "@/layouts/PublicRoute/PublicRoutes";


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        {publicRoutes.map((route: any, index) => 
          <Route path={route.path} key={index} element={<route.component />} />
        )}
      </Route>

      <Route 
        path="/admin" 
        element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }>
        {adminRoutes.map((route: any, index) => 
          <Route path={route.path} key={index} element={<route.component />} />
        )}
      </Route>
    </Routes>
  );
}

export default AppRoutes;