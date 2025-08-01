import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const searchUsers = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button onClick={searchUsers}>Search</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;