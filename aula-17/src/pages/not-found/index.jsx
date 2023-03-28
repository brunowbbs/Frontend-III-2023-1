import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
      <Link to="/home">Ir para o inicio</Link>
    </div>
  );
}
