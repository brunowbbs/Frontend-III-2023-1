import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(10);

  function getTemp() {
    return 30;
  }

  const [temp, setTemp] = useState(0);

  useEffect(() => {
    console.log("ok");
    const response = getTemp();
    setTemp(response);
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {/* <h3>TEMPERATURA DE AGORA: {temp}</h3> */}

      <h4>Numero1: {number}</h4>
      <h4>Numero2: {number2}</h4>
      <button onClick={() => setNumber(number + 1)}>Incrementar1</button>
      <button onClick={() => setNumber2(number2 + 1)}>Incrementar2</button>
      {/*   <h2>{number}</h2>
      <h2>{number2}</h2> */}

      {/* <input /> */}

      {/* 
      <button onClick={() => setNumber2(number2 + 1)}>Incrementar2</button> */}
    </div>
  );
}

export default App;
