import { useState } from "react";

// {
//   nome:"",
//   idade:""
// }

function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAgeInput, setUserAgeInput] = useState("");

  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);

  function addUserList() {
    // event.preventDefault();
    // console.log(event);
    const newUser = {
      idade: userAgeInput,
      name: userNameInput,
    };

    // listaDeUsuarios.push(newUser)

    setListaDeUsuarios([...listaDeUsuarios, newUser]);
    setUserNameInput("");
    setUserAgeInput("");
    // alert(userAgeInput);
  }

  console.log(listaDeUsuarios);

  return (
    <div>
      <h1>Hello World</h1>

      <h3>{userNameInput}</h3>
      <h3>{userAgeInput}</h3>

      <form>
        {/* <form onSubmit={addUserList}> */}
        <input
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
        />

        <br />
        <br />

        <input
          value={userAgeInput}
          onChange={(event) => setUserAgeInput(event.target.value)}
        />
        <br />
        <br />

        {/* <input type="submit" /> */}
        <input type="button" onClick={addUserList} value="Add" />
      </form>

      {/* <p>{JSON.stringify(listaDeUsuarios)}</p> */}

      <ul>
        {listaDeUsuarios.map((item, index) => (
          <li key={index}>
            {item.name} - {item.idade}
          </li>
        ))}
      </ul>

      {/* <button onClick={addUserList}>Add</button> */}
    </div>
  );
}

export default App;
