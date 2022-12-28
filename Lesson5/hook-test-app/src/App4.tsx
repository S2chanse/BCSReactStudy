import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { TodoActionCreator, TodoItemType, TodoReducer } from './TodoReducer';

type Props = {};

let idNow = new Date().getTime();
const initialTodoList: Array<TodoItemType> = [
  { id: idNow, todo: '운동' },
  { id: idNow + 1, todo: '독서' },
  { id: idNow + 2, todo: '학습' },
];

function App4({}: Props) {
  const [todoList, dispatchTodoList] = useReducer(TodoReducer, initialTodoList);
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (todo.replace(/[ ]/gi, '').length > 0) {
      dispatchTodoList(TodoActionCreator.addTodo(todo));
    } else {
      alert('값을 입력해 주세요.');
    }
    setTodo('');
  };
  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreator.deleteTodo(id));
  };
  useEffect(() => {
    console.log('useEffect', initialTodoList);
  }, [initialTodoList]);

  return (
    <div style={{ padding: '20px' }}>
      <input
        type='text'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTodo(e.currentTarget.value)
        }
        value={todo}
      />
      <button onClick={addTodo}>할 일 추가</button>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.todo} &nbsp;&nbsp;
              <button onClick={() => deleteTodo(item.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App4;
