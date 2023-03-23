import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  return (
    <div className={{}}>
      <h1>Hello home page</h1>
      <input
        placeholder="Informe o ID"
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />

      <button onClick={() => navigate(`/dashboard/${id}`)}>
        Ir para o dashboard
      </button>
      <Link to={`/dashboard/${id}`}>Ir para o dashbord</Link>
    </div>
  );
}
