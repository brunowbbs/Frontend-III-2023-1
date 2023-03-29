import { BrowserRouter, Routes, Route } from "react-router-dom";

import ContatoPage from "./pages/contato";
import HomePage from "./pages/home";
import ReportsPage from "./pages/reports";
import SobreNos from "./pages/sobrenos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
