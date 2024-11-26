import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../__tests__/TodoList';

test('renders initial todo list', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId('todo-item');
  expect(todoItems.length).toBeGreaterThan(0);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);
  const todoItems = screen.getAllByTestId('todo-item');
  expect(todoItems.some((item) => item.textContent.includes('New Todo'))).toBe(true);
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId('todo-item');
  const firstTodo = todoItems[0];
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveClass('completed');
  fireEvent.click(firstTodo);
  expect(firstTodo).not.toHaveClass('completed');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByTestId('todo-item');
  const deleteButton = screen.getAllByText(/delete/i)[0];
  fireEvent.click(deleteButton);
  const updatedTodoItems = screen.queryAllByTestId('todo-item');
  expect(updatedTodoItems.length).toBe(todoItems.length - 1);
});
