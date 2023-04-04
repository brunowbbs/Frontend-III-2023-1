import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import AuthProvider from "./context/auth-context";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
