import React from 'react';

type Props = {
  useList: string[];
};

export default function UserList(props: Props) {
  return (
    <ul>
      {props.useList.map((userId, index) => {
        return <li key={index}>{userId}</li>;
      })}
    </ul>
  );
}
