import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/logo.png";
import styles from "./styles.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";

export default function AuthPage() {
  const navigate = useNavigate();

  const { saveName, saveToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function logar() {
    try {
      const response = await api.post("/auth", { email, password });
      // console.log(response.data.name);
      saveName(response.data.name);
      saveToken(response.data.token);
      navigate("/home");
    } catch (error) {
      alert("Erro ao logar");
    }
  }

  return (
    <div className={styles.container}>
      <img src={logo} />

      <div className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={logar}>Entrar</button>
      </div>
    </div>
  );
}
