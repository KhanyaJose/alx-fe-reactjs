import React from 'react';
import TodoList from './components/TodoList'; // Import TodoList component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <TodoList /> {/* Render the TodoList component here */}
      </header>
    </div>
  );
}

export default App;
