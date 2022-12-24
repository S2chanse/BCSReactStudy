import React from "react";
import { TodoListItemType } from "../AppContainer";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
type AppProps = {
  todoList: TodoListItemType[];
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};
export default function App({
  todoList,
  addTodo,
  deleteTodo,
  toggleDone,
}: AppProps) {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: TodoList App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodo addTodo={addTodo} />
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            toggleDone={toggleDone}
          />
        </div>
      </div>
    </div>
  );
}
