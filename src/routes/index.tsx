import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/authContext";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <AuthProvider>
            <Home />
          </AuthProvider>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
