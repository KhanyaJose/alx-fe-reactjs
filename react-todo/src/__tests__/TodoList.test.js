// src/__tests__/TodoList.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  // Ensure the todo items are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.submit(input.closest('form'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
