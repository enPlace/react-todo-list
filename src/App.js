import { useState } from "react";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos/Todos";
import Finished from "./Components/Finished";

function App() {
  const [idCounter, setIdCounter] = useState(7);
  const [todoList, setTodoList] = useState([
    {
      title: "Clean Room",
      added: new Date(new Date().setDate(new Date().getDate() - 1)),
      deadline: new Date(2021, 7, 16), 
      id: 1,
    },
    {
      title: "Setup development environment",
      added: new Date(),
      deadline: new Date(2021, 7, 16),
      id: 2,
    },
    {
      title: "Develop website and add content",
      added: new Date(),
      deadline: new Date(2030, 7, 24),
      id: 3,
    },
    {
      title: "Deploy to live server",
      added: new Date(),
      deadline: new Date(2030, 8, 25),
      id: 4,
    },
  ]);

  const [finishedList, setFinishedList] = useState([
    {
      title: "Book hotel in Santiago",
      added: new Date(new Date().setDate(new Date().getDate() - 3)),
      deadline: new Date(2021, 7, 14),
      id: 5,
    },
    {
      title: "Implement foobar",
      added: new Date(new Date().setDate(new Date().getDate() - 100)),
      deadline: new Date(2021, 4, 8),
      id: 6,
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    deadline: "",
  });

  function handleComplete(id) {
    const completedItem = todoList.filter((item) => item.id === id);
    setTodoList(todoList.filter((item) => item.id !== id));
    let newFinished = finishedList;
    newFinished.unshift(completedItem[0]);
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


  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    })
  }

  function handleAddTask() {
    newTask.added = new Date()
    newTask.id = idCounter
    const deadline = newTask.deadline.split("/")
    newTask.deadline = new Date(deadline[2], deadline[0]-1, deadline[1])
    setIdCounter(idCounter+1)
    todoList.unshift(newTask)
    setNewTask({
      title: "",
      deadline: "",
    })
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Todos
        todoList={todoList}
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
