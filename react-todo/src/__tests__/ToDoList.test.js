import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), {
    target: { value: 'New Todo' }
  });
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText(/Learn React/i);
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
