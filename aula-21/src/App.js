import Box from "./components/box";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Box />
      <Button title="Clique aqui" handeClick={() => alert("ok")} />
      <Button title="Clique aqui 222" handeClick={() => alert("ok")} />
    </div>
  );
}

export default App;
