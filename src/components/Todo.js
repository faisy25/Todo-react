import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTodos([...todos, e.target.elements.addTask.value]);
    e.target.elements.addTask.value = "";
  };

  const deleteTask = (task) => setTodos(todos.filter((todo) => todo !== task));

  return (
    <div>
      <h2>My Todos</h2>

      <ul style={{ paddingLeft: 0 }}>
        {todos.map((task) => (
          <li key={task} style={{ listStyleType: "none" }}>
            <input type="checkbox" onChange={() => deleteTask(task)} /> {task}
          </li>
        ))}
      </ul>

      <hr />

      <form onSubmit={addTask}>
        {/* <form> */}
        <input type="text" placeholder="Add new Task" name="addTask" />
        <button tpe="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Todo;
