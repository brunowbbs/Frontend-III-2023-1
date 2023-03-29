import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#999" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: 20 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/sobre-nos">Sobre nos</Link>
        </li>
        <li>
          <Link to="/reports">Relatorios</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
