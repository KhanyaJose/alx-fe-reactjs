// src/__tests__/TodoList.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList'; // Adjust the path as needed

// Sample data for testing
const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Jest', completed: false },
];

describe('TodoList', () => {
  
  // Test initial rendering of the TodoList component
  it('renders todo list correctly with initial todos', () => {
    render(<TodoList todos={initialTodos} />);
    
    // Verify that both todos are displayed
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  });

  // Test adding a new todo item
  it('can add a new todo', () => {
    render(<TodoList todos={initialTodos} />);
    
    // Simulate user input
    const input = screen.getByPlaceholderText('Enter a new todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);
    
    // Verify the new todo is added
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  // Test toggling a todo's completion status
  it('can toggle a todo completion status', () => {
    render(<TodoList todos={initialTodos} />);
    
    // Find the first todo item
    const todoItem = screen.getByText('Learn React');
    
    // Simulate a click to toggle completion
    fireEvent.click(todoItem);
    
    // Verify that the todo is now marked as completed (for example, check if it's crossed out)
    expect(todoItem).toHaveClass('completed'); // This assumes your CSS adds a "completed" class when toggled
  });

  // Test deleting a todo item
  it('can delete a todo', () => {
    render(<TodoList todos={initialTodos} />);
    
    // Find the delete button for the first todo item
    const deleteButton = screen.getByText('Delete'); // Adjust the text as per your button label
    
    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    
    // Verify that the todo is removed from the list
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
