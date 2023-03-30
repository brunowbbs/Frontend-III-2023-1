import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";

export default function Form() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { setEmail: setMail, setNome } = useContext(AuthContext);

  async function auth(event) {
    event.preventDefault();

    const { data } = await axios.post(
      "https://api-products-dh-next.vercel.app/auth",
      {
        email: email,
        password: senha,
      }
    );
    setMail(data.email);
    setNome(data.name);
  }

  return (
    <form onSubmit={auth}>
      <input
        placeholder="Email"
        type="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        placeholder="Senha"
        type="Senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
