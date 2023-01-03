import React from "react";
import { TodoListItemType } from "../AppContainer";
import TodoListItem from "./TodoListItem";
type TodoListProps = {
  todoList: TodoListItemType[];
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};
export default function TodoList({
  todoList,
  deleteTodo,
  toggleDone,
}: TodoListProps) {
  let items = todoList.map((item) => {
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    );
  });
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  );
}
