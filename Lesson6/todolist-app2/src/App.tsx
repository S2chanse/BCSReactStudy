import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import TodoList from './TodoList';

export type TodoListItemType = {
  id: number;
  todo: string;
};

function App() {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);
  const [todo, setTodo] = useState<string>('');

  const addTodo = useCallback(
    (todo: string): void => {
      let newList = [...todoList, { id: new Date().getTime(), todo: todo }];
      setTodoList(newList);
      setTodo('');
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      let newList = [...todoList];
      let index = todoList.findIndex((item) => item.id === id);
      newList.splice(index, 1);
      setTodoList(newList);
    },
    [todoList]
  );
  return (
    <div>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>저장하기</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>todoList 개수 : {todoList.length}</div>
    </div>
  );
}

export default App;
