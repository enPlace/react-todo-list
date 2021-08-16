import { useState } from "react";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos/Todos";
import Finished from "./Components/Finished";

function App() {
  let idCounter = 6;
  const [todoList, setTodoList] = useState([
    {
      title: "Clean Room",
      added: new Date(new Date().setDate(new Date().getDate() - 1)),
      deadline: "08/16/2021",
      id: 1,
    },
    {
      title: "Setup development environment",
      added: new Date(),
      deadline: "08/16/2021",
      id: 2,
    },
    {
      title: "Develop website and add content",
      added: new Date(),
      deadline: "08/24/2030",
      id: 3,
    },
    {
      title: "Deploy to live server",
      added: new Date(),
      deadline: "08/25/2030",
      id: 4,
    },
  ]);

  const [finishedList, setFinishedList] = useState([
    {
      title: "Book hotel in Santiago",
      added: new Date(new Date().setDate(new Date().getDate() - 3)),
      deadline: "8/14/2021",
      id: 5,
    },
    {
      title: "Implement foobar",
      added: new Date(new Date().setDate(new Date().getDate() - 100)),
      id: 6,
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    added: "",
    deadline: "",
    id: "",
  });

  function handleComplete(id) {
    const completed = todoList.filter((item) => item.id === id);
    setTodoList(todoList.filter((item) => item.id !== id));
    let newFinished = finishedList;
    newFinished.unshift(completed[0]);
    setFinishedList(newFinished);
  }
  function handleDelete(id) {
    setFinishedList(finishedList.filter((item) => item.id !== id));
  }
  function handleRestore(id) {
    const restoredItem = finishedList.filter((item) => item.id === id);
    setFinishedList(finishedList.filter((item) => item.id !== id));
    let newTodo = todoList;
    newTodo.unshift(restoredItem[0]);
    setTodoList(newTodo);
  }
  function handleAddTask(e) {
    console.log(document.getElementById("new-task").value);
    console.log(e);
    idCounter ++; 
  }

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos
        todoList={todoList}
        idCounter={idCounter}
        handleComplete={handleComplete}
        handleAddTask={handleAddTask}
        handleChange = {handleChange}
        newTask = {newTask}
      ></Todos>
      <Finished
        finishedList={finishedList}
        handleDelete={handleDelete}
        handleRestore={handleRestore}
      ></Finished>
    </div>
  );
}

export default App;
