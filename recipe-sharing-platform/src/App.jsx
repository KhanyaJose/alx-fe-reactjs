import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900">
      <HomePage />
      <div className="flex space-x-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-20 hover:scale-110 transition-transform"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-20 hover:scale-110 transition-transform"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold mt-8">Vite + React</h1>
      <div className="card mt-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
        >
          Count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-6 text-lg">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
