import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { MyContext } from "../../context/my-context";

export default function Box() {
  const { nome, disciplina } = useContext(MyContext);
  const { email, userName, setEmail } = useContext(AuthContext);

  return (
    <div style={{ background: "#999" }}>
      <h2>Hello Box</h2>
      <h2>Nome:{nome} </h2>
      <h2>disciplina:{disciplina} </h2>
      <button onClick={() => {}}>Incrementar</button>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <h2>Email: {email} </h2>
      <h2>UserName:{userName} </h2>
    </div>
  );
}
