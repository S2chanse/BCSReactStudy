import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Chatting from './Chatting';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Chatting />
      </ErrorBoundary>
    </div>
  );
}

export default App;
