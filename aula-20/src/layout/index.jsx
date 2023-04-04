import styles from "./styles.module.css";

import { useContext, useEffect } from "react";

import logo from "../assets/logo.png";
import { AuthContext } from "../context/auth-context";
import { Link, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const { name, removeUserStorage } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("@times_token");

    if (!token) {
      navigate("/");
    }
  }, []);

  function logout() {
    removeUserStorage();
    navigate("/");
  }

  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo do sistema" />

        <ul>
          <li>Olá, {name}</li>
          <li>
            <button
              onClick={logout}
              style={{
                cursor: "pointer",
                background: "transparent",
                border: "none",
                color: "#FFF",
                fontFamily: "Poppins",
                fontSize: "16px",
              }}
            >
              Sair
            </button>
          </li>
        </ul>
      </header>
      <div className={styles.children}>{children}</div>
      <footer className={styles.footer}>Hello Footer</footer>
    </div>
  );
}
