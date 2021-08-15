import { useState } from "react";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos/Todos";

function App() {
  const [todoList, setTodoList] = useState([
    { title: "Clean Room", added: new Date(), deadline: "07/16/2021", id:1 },
    {
      title: "Setup development environment",
      added: new Date(),
      deadline: "07/16/2021",
      id:2
    },
    {
      title: "Develop website and add content",
      added: new Date(),
      deadline: "07/24/2030",
      id:3
    },
    {
      title: "Deploy to live server",
      added: new Date(),
      deadline: "07/25/2030",
      id:4
    },
  ]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos todoList={todoList}></Todos>

    </div>
  );
}

export default App;
