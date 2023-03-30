import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { MyContext } from "../../context/my-context";

export default function Container() {
  const { nome, disciplina, setNome } = useContext(MyContext);
  const { email, userName } = useContext(AuthContext);

  return (
    <div style={{ background: "#398fff" }}>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <h2>Nome:{nome} </h2>
      <h2>disciplina:{disciplina} </h2>
      <br />
      <h2>Email: {email} </h2>
      <h2>UserName:{userName} </h2>
    </div>
  );
}
