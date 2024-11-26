import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {

  // Test if the TodoList renders correctly
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo app')).toBeInTheDocument();
  });

  // Test if a new todo can be added
  test('can add a new todo', () => {
    render(<TodoList />);
    
    // Click on the 'Add Todo' button
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Check if the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling a todo's completion status
  test('can toggle todo completion', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    
    // Click to toggle completion status
    fireEvent.click(todoItem);
    
    // Check if the todo is crossed out (completed)
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    
    // Click again to toggle it back
    fireEvent.click(todoItem);
    
    // Check if the todo is no longer crossed out (not completed)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test deleting a todo
  test('can delete a todo', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    const deleteButton = todoItem.nextSibling; // The delete button is next to the todo text
    
    // Click on the delete button
    fireEvent.click(deleteButton);
    
    // Check if the todo was removed
    expect(todoItem).not.toBeInTheDocument();
  });

});
