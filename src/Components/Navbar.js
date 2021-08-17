const Navbar = ({ handleShowHide }) => {
  return (
    <nav className="navbar">
      <div className="links">
        <p name="todo" onClick={() => handleShowHide("todo")}>
          Todo's
        </p>
        <p
          name="finished"
          onClick={() => {
            handleShowHide("finished");
          }}
        >
          Finished
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
