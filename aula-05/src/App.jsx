import Card from "./components/Card";

import dados from "./data/dados";
import data from "./data/dados.json";

function App() {
  return (
    <div>
      <h1>Hello App</h1>

      {/* {titulos.map((titulo) => {
        if (titulo === "Card 1" || titulo === "Card 2") {
          return <Card title={titulo} />;
        }
      })} */}
      {data.map((dado) => (
        <Card
          key={dado.id}
          // title={dado.titulo}
          // subtitulo={dado.subtitulo}
          // url={dado.url}
          dado={dado}
        />
      ))}

      {/* <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" /> */}
    </div>
  );
}

export default App;
