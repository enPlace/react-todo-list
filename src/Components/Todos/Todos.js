const Todos = ({ todoList }) => {
  return (
    <div className="todos">
        
      <div className="input">
        <form>
          <input type="text" />
          <button type="submit">+</button>
        </form>
      </div>
      <h1>Todo:</h1>
      <ul className="todo-list">
        {todoList.map((item) => (
          <li className="todo-item">
            <h2>{item.title}</h2>
            <button>Complete</button>
            <p>
              Date added: {item.added.getMonth()}/{item.added.getDate()}/
              {item.added.getFullYear()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
