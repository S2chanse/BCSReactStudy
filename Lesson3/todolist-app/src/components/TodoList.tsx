import React, { useContext } from 'react';
import { TodoListItemType } from '../AppContainer';
import TodoContext from '../TodoComtext';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const values = useContext(TodoContext);
  let items = values?.state.todoList.map((item) => {
    return (
      <TodoListItem
        key={item.no}
        todoItem={item}
        deleteTodo={values?.actions.deleteTodo}
        toggleDone={values?.actions.toggleDone}
      />
    );
  });
  return (
    <div className='row'>
      <div className='col'>
        <ul className='list-group'>{items}</ul>
      </div>
    </div>
  );
}
