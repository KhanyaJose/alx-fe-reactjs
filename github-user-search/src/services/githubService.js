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

  const params = {
    q: query,
    page,
    per_page: 10,
  };

  const response = await axios.get('https://api.github.com/search/users', { params });
  const users = response.data.items;

  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const res = await axios.get(`https://api.github.com/users/${user.login}`);
      return res.data;
    })
  );

  return { items: detailedUsers, total_count: response.data.total_count };
};
