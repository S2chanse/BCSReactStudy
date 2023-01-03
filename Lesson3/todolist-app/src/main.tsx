import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import App from './components/App';
import { TodoProvider } from './TodoComtext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
