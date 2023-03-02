import Card from "./components/Card";

const usuarios = [
  {
    id: 1,
    name: "Wesley",
    turma: "Front-end",
    ativo: true,
    cor: "#999888",
  },
  {
    id: 2,
    name: "João",
    turma: "UX",
    ativo: false,
    cor: "#009888",
  },
  {
    id: 3,
    name: "Ana",
    turma: "Back-end",
    ativo: true,
    cor: "#550088",
  },
  {
    id: 3,
    name: "Beatriz",
    turma: "Back-end",
    ativo: true,
    cor: "#550011",
  },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>

      <ul>
        {usuarios.map((usuario) => (
          <Card key={usuario.id} teste="ola" usuario={usuario} />
        ))}
      </ul>

      {/* <Card title="Titulo do Card 1" />
      <Card title="Titulo do Card 2" />
      <Card title="Titulo do Card 3" />
      <Card title="Titulo do Card 4" />
      <Card title="Titulo do Card 5" />

      <Card /> */}
    </div>
  );
}

export default App;
