import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [todoStatus, setTodoStatus] = useState("active");
  const [finishedStatus, setFinishedStatus] = useState("");

  const handleStatusChange = (name) => {
    if(name === "todo") {
      setTodoStatus("active")
      setFinishedStatus("")
      console.log(name)
    }else if (name ==="finished") {
      setFinishedStatus("active")
      setTodoStatus("")
      console.log(name)
    }
  };

  return (
    <nav className="navbar">
      <div className="links">
        <Link
          name="todo"
          to="/"
          className={todoStatus}
          onClick={() => {
            handleStatusChange("todo");
          }}
        >
          Todo's
        </Link>
        <Link
          name="finished"
          to="/finished"
          className={finishedStatus}
          onClick={() => {
            handleStatusChange("finished");
          }}
        >
          Finished tasks
        </Link>
        <a
          href="https://github.com/enPlace/react-todo-list"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
