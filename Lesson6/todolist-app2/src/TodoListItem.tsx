import React from 'react';
import { TodoListItemType } from './App';

type Props = {
  todoListItem: TodoListItemType;
  deleteTodo: (id: number) => void;
};
const TodoListItem = (props: Props) => {
  console.log('## TodoListItem');
  return (
    <li>
      {props.todoListItem.todo}{' '}
      {
        <button onClick={() => props.deleteTodo(props.todoListItem.id)}>
          삭제
        </button>
      }
    </li>
  );
};

export default React.memo(TodoListItem);
