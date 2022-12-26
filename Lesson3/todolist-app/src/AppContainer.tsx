import produce from "immer";
import React, { useState } from "react";
import App from "./components/App";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

const baseList: TodoListItemType[] = [
  { no: 1, todo: "React학습 1", done: false },
  { no: 2, todo: "React학습 2", done: false },
  { no: 3, todo: "React학습 3", done: true },
  { no: 4, todo: "React학습 4", done: false },
];
export default function AppContainer() {
  const [todoList, setTodoList] = useState<TodoListItemType[]>(baseList);

  const addTodo = (todo: string) => {
    let newTodoList = produce(todoList, (draft) => {
      let lastNo = todoList[todoList.length - 1].no + 1;
      let newTodo: TodoListItemType = { no: lastNo, todo, done: false };
      draft.push(newTodo);
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    let index = todoList.findIndex((todo) => todo.no === no);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };
  return (
    <App
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
    />
  );
}
