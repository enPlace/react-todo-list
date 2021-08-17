const Navbar = ({ handleShowHide, showHide }) => {
  let todoStatus = showHide === "todo" ? "active" : "";
  let finishedStatus = showHide === "finished" ? "active" : "";
  return (
    <nav className="navbar">
      <div className="links">
        <p
          className={todoStatus}
          name="todo"
          onClick={() => handleShowHide("todo")}
        >
          Todo's
        </p>
        <p
        className = {finishedStatus}
          name="finished"
          onClick={() => {
            handleShowHide("finished");
          }}
        >
          Finished tasks
        </p>
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
