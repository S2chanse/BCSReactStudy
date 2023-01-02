import React from 'react';
import { TodoListItemType } from './App';
import TodoListDelButton from './TodoListDelButton';
import TodoListItemBody from './TodoListItemBody';

type Props = {
  todoListItem: TodoListItemType;
  deleteTodo: (id: number) => void;
};
const TodoListItem = (props: Props) => {
  console.log('## TodoListItem');
  return (
    <li>
      <TodoListItemBody todoListItem={props.todoListItem} />
      <TodoListDelButton
        deleteTodo={props.deleteTodo}
        id={props.todoListItem.id}
      />
    </li>
  );
};

export default React.memo(TodoListItem);
