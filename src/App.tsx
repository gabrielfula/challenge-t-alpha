import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/routes";

import { AuthProvider } from "./context";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
        </AuthProvider> 
      </BrowserRouter>
    </>
  );
}
