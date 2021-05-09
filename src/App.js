import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import {addTodo, deleteTodo} from "./redux/todo/action";
import Todo from "./components/Todo";

console.log(store);

const storeItem = store.subscribe(() => console.log(store.getState()));

console.log(storeItem);

console.log(addTodo);

console.log(deleteTodo);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
