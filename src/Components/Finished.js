const Finished = ({finishedList, handleDelete, handleRestore, showHide}) => {
  let display = showHide === "finished" ? "" : "hide"

  return (
    <div className={"finished list-container " +display}>
      <h1>Finished:</h1>
      <ul className="finished-list">
        {finishedList.map((item) => (
          <li className="finished-item">
            <h2>{item.title}</h2>
            <button onClick = {()=>{
              handleDelete(item.id)
            }}>delete</button>
            <button onClick = {()=>{
              handleRestore(item.id)
            }}>restore</button>
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
