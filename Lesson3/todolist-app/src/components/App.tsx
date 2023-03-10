import React from 'react';
import { TodoListItemType } from '../AppContainer';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function App() {
  return (
    <div className='container'>
      <div className='card card-body bg-light'>
        <div className='title'>:: TodoList App</div>
      </div>
      <div className='card card-default card-borderless'>
        <div className='card-body'>
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </div>
  );
}
