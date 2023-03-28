import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const usuario = {
  nome: "",
  matricula: 123,
  curso: "Front",
};

// const novoUsuario = {
//   // nome: usuario.nome,
//   // matricula: usuario.matricula,
//   // curso: usuario.curso,
//   ...usuario,
// };

export default function FormularioPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [aluno, setAluno] = useState({});

  async function getAluno() {
    const { data } = await api.get(`/aluno/${id}`);
    setAluno({ ...data });
  }

  async function editUser(event) {
    event.preventDefault();
    await api.put(`/aluno/${id}`, aluno);
  }

  async function createUser(event) {
    event.preventDefault();
    await api.post(`/aluno`, aluno);
    navigate("/home");
  }

  useEffect(() => {
    getAluno();
  }, []);

  return (
    <form onSubmit={id ? editUser : createUser}>
      <h1>{id}</h1>
      <input
        type="text"
        placeholder="Nome"
        value={aluno.nome}
        onChange={(event) => setAluno({ ...aluno, nome: event.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Matricula"
        value={aluno.matricula}
        onChange={(event) =>
          setAluno({ ...aluno, matricula: event.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Curso"
        value={aluno.curso}
        onChange={(event) => setAluno({ ...aluno, curso: event.target.value })}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Bimestre"
        value={aluno.bimestre}
        onChange={(event) =>
          setAluno({ ...aluno, bimestre: event.target.value })
        }
      />
      <input type="submit" value={"Salvar"} />
    </form>
  );
}
