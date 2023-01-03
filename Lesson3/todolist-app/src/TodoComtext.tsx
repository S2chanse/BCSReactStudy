import produce from 'immer';
import React, { useState } from 'react';

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

//Provnoer로 전잘한 데이터(value)의 타입 정의
//상태와 상태 변경을 가짐
export type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

//앞에서 정의한 타입 또는 null 타입을 이용해 Context 객체 생성
const TodoContext = React.createContext<TodoListContextValueType | null>(null);

//TodoProvider 컴포넌트의 자식 컴포넌트 타입을 정의
//<TodoProvider> 자식 컴포넌트 </TodoProvider>
type PropType = {
  children: JSX.Element | JSX.Element[];
};
//상태와 상태 변경 함수를 가진 컴포넌트
//상태와 상태 변경 함수를 데이터 타입 형식으로 구성한 후 value 속성으로 전달
//<TodoContext.Provnoer value={value}>{children}</TodoContext.Provnoer>
export const TodoProvider = (props: PropType) => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([
    { no: 1, todo: 'React 1', done: true },
    { no: 2, todo: 'React 2', done: false },
    { no: 3, todo: 'React 3', done: false },
    { no: 4, todo: 'React 4', done: false },
  ]);

  const addTodo = (todo: string) => {
    let newTodoList: TodoListItemType[] = produce(
      todoList,
      (draft: TodoListItemType[]) => {
        draft.push({ no: new Date().getTime(), todo, done: false });
      }
    );
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    let index = todoList.findIndex((item) => item.no === no);
    let newTodoList: TodoListItemType[] = produce(
      todoList,
      (draft: TodoListItemType[]) => {
        draft.splice(index, 1);
      }
    );
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    let index = todoList.findIndex((item) => item.no === no);
    let newTodoList: TodoListItemType[] = produce(
      todoList,
      (draft: TodoListItemType[]) => {
        draft[index].done = !draft[index].done;
      }
    );
    setTodoList(newTodoList);
  };
  //<TodoContext.Provnoer/>의 value로 전달할 객체 생성
  const values: TodoListContextValueType = {
    state: { todoList },
    actions: {
      addTodo,
      deleteTodo,
      toggleDone,
    },
  };
  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
