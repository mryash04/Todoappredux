import React from "react";
import { addTodo, deleteTodo } from "../redux/todo/action";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const todo = useSelector((state) => state.data);

  console.log(todo);

  const dispatch = useDispatch();
  console.log(dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    let input = event.target.userInput.value;
    console.log(input);
    dispatch(addTodo(input));
    event.target.userInput.value = "";
  };

  const handleClick = (id) => {
    console.log("Clicked");
    console.log(id);
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo">
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
      <div className="addTodo">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            name="userInput"
            autoComplete="off"
          />
          <button>Add Todo</button>
        </form>
      </div>
      {todo.map((value) => {
        return (
          <div className="allTodo">
            <div className="todoList" key={value.id}>
              <h2>{value.message}</h2>
              <button onClick={() => handleClick(value.id)}>Delete Todo</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
