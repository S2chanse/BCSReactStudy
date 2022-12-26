import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Chatting from './Chatting';
import ErrorBoundary from './ErrorBoundary';
import UserList from './UserList';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <div>
          참여사용자 :
          <UserList useList={['gang', 'hang']} />
          <Chatting />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
