import react, { useEffect } from "react";
import './App.css';

function App() {
  const url = "https://api.github.com/users/juanjosecaballero";
  const [todos, setTodos] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  }

  useEffect (() => {
    fetchApi();
  }, [])
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      {!todos ? 'Cargando...' : todos.map((todo,index) => {
        return <li>{todo.title}{completed ? 'Check':"Fail"}</li>
      })
      }
    </div>
  );
}

export default App;
