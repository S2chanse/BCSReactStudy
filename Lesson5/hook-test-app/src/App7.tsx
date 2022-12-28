import React, { useMemo, useState } from 'react';

type TodoListItemType = {
  id: number;
  todo: string;
};

const getTodoListCnt = (todoList: TodoListItemType[]): number => {
  console.log(`## TodoList 카운트 : ${todoList.length}`);
  return todoList.length;
};
const App = () => {
  const [todoList, setTodoList] = useState<TodoListItemType[]>([]);
  const [toDo, setToDo] = useState<string>('');

  const addTodo = (todo: string) => {
    let newTodoList = [...todoList, { id: new Date().getTime(), todo }];
    setTodoList(newTodoList);
  };
  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const memorizedCnt = useMemo<number>(
    () => getTodoListCnt(todoList),
    [todoList]
  );
  return (
    <div className='boxStyle'>
      <input
        type='text'
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button onClick={() => addTodo(toDo)}>Add Todo</button>
      <br />
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.todo}
              <button onClick={() => deleteTodo(item.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
      <div>toDoList 개수 : {memorizedCnt}</div>
    </div>
  );
};

export default App;
