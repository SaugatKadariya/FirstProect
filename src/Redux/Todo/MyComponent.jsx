import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./TodoSlice";

const MyComponent = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo("New Task")}>Add Task</button>
    </div>
  );
};

export default MyComponent;
