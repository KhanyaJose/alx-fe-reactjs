import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
  let query = '';

  if (username) {
    query += `${username} `;
  }
  if (location) {
    query += `location:${location} `;
  }
  if (minRepos) {
    query += `repos:>=${minRepos} `;
  }

  query = query.trim();

  if (!query) {
    throw new Error('At least one search parameter is required');
  }

  const encodedQuery = encodeURIComponent(query);
  const url = `https://api.github.com/search/users?q=${encodedQuery}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const res = await axios.get(`https://api.github.com/users/${user.login}`);
      return res.data;
    })
  );

  return { items: detailedUsers, total_count: response.data.total_count };
};
