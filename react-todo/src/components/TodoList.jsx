// src/TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Jest', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState(''); // State to manage the new todo input

  // Add new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setNewTodo(''); // Clear input field after adding todo
  };

  // Toggle completion of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id, e) => {
    e.stopPropagation(); // Prevent triggering the toggleTodo when clicking delete
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter a new todo" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} // Handle input change
      />
      <button onClick={() => addTodo(newTodo)} disabled={!newTodo.trim()}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            onClick={() => toggleTodo(todo.id)} 
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
            <button onClick={(e) => deleteTodo(todo.id, e)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
