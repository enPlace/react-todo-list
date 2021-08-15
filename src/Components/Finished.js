const Finished = ({finishedList}) => {
  return (
    <div className="finished list-container">
      <h1>Finished:</h1>
      <ul className="finished-list">
        {finishedList.map((item) => (
          <li className="finished-item">
            <h2>{item.title}</h2>
            <button>delete</button>
            <button>restore</button>
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

export default Finished;
