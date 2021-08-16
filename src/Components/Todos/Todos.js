import { useState } from "react";
const Todos = ({ todoList, handleComplete, handleAddTask,handleChange, newTask }) => {

  return (
    <div className="todos list-container">
      <div className="input">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hello!!!");
          }}
        >
          <input
            name="title"
            id="new-task"
            type="text"
            placeholder="enter task..."
            value = {newTask.title}
            onChange = {handleChange}
            autoComplete= "off"
          />
          <input
            name="deadline"
            id="new-deadline"
            type="text"
            placeholder="deadline (mm/dd/yyyy)"
            value = {newTask.deadline}
            onChange = {handleChange}
            autoComplete = "off"
          />
          <button onClick={handleAddTask} type="submit">
            +
          </button>
        </form>
      </div>
      <h1>Todo:</h1>
      <ul className="todo-list">
        {todoList.map((item) => (
          <li className="todo-item">
            <h2>{item.title}</h2>
            <button
              onClick={() => {
                handleComplete(item.id);
              }}
            >
              complete
            </button>
            <p>
              Date added: {item.added.getMonth() + 1}/{item.added.getDate()}/
              {item.added.getFullYear()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
