import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  function limpaCampos() {
    setTitle("");
    setDate("");
    setId("");
  }

  async function getTodos() {
    try {
      const response = await axios.get("https://api-todo-six.vercel.app/todo");
      setTodos(response.data);
      // setProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar dados");
    }
  }

  async function addTodo(event) {
    event.preventDefault();

    try {
      await axios.post("https://api-todo-six.vercel.app/todo", {
        title: title,
        date: date,
      });
      limpaCampos();
      getTodos();
    } catch (error) {
      alert("Erro ao tentar cadastrar ToDo");
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`https://api-todo-six.vercel.app/todo/${id}`);
      getTodos();
      alert("Todo Apagado");
    } catch (error) {
      alert("Erro ao tentar remover Todo");
    }
  }

  function preencherForm(todo) {
    setTitle(todo.title);
    setDate(todo.date.split("T")[0]);
    setId(todo._id);
  }

  async function editTodo(event) {
    event.preventDefault();

    try {
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {
        title: title,
        date: date,
      });
      limpaCampos();
      getTodos();

      alert("Todo Editada com sucesso");
    } catch (error) {
      alert("Erro ao tentar editar ToDo");
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      <form onSubmit={id ? editTodo : addTodo}>
        <input
          placeholder="Digite o titulo"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <input
          placeholder="Informe a data"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <br />
        <input type="submit" />
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            style={{ border: "1px solid #999", marginBottom: 5 }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.date}</p>
            <button onClick={() => deleteTodo(todo._id)}>Apagar</button>
            <button onClick={() => preencherForm(todo)}>Editar</button>
          </li>
        ))}
      </ul>
      {/* <p>{JSON.stringify(products)}</p> */}
    </div>
  );
}

export default App;
