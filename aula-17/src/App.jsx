import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import FormularioPage from "./pages/formulario";
import NotFoundPage from "./pages/not-found";
import Header from "./components/header";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: HomePage,
//   },
//   {
//     path: "/formulario",
//     element: FormularioPage,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/formulario" element={<FormularioPage />} />
        <Route path="/formulario/:id" element={<FormularioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Header />
      {/* <RouterProvider router={router} /> */}
    </BrowserRouter>
  );
}

export default App;
