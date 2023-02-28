import "./styles.css";

function App() {
  const nome = "Wesley";

  return (
    <div className="container">
      {/* <h1 style={{ color: "red", fontSize: 18 }}>Hello World {nome}</h1> */}
      <h1 className="nome">Hello World {nome}</h1>
    </div>
  );
}

export default App;
