import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function HomePage() {
  const [alunos, setAlunos] = useState([]);

  async function getAlunos() {
    try {
      const response = await api.get("/aluno");
      setAlunos(response.data);
    } catch (error) {
      console.log(error);
      alert("Erro ao buscar alunos");
    }
  }

  useEffect(() => {
    getAlunos();
  }, []);

  async function removerAluno(id) {
    await api.delete(`/aluno/${id}`);
    getAlunos();
  }

  return (
    <div>
      <h1>Alunos</h1>
      <Link to="/formulario">Formulário</Link>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.matricula}>
            <Link to={`/formulario/${aluno._id}`}>
              <p>{aluno.nome}</p>
            </Link>
            <button onClick={() => removerAluno(aluno._id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
