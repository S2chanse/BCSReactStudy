import React from 'react';

type Props = {
  id: number;
  deleteTodo: (id: number) => void;
};

const TodoListDelButton = (props: Props) => {
  console.log('## TodoListItemButton');
  return <button onClick={() => props.deleteTodo(props.id)}>삭제</button>;
};

export default React.memo(TodoListDelButton);
