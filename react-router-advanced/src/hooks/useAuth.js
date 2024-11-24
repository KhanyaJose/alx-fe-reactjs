// src/hooks/useAuth.js
import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login function
  const login = () => setIsAuthenticated(true);

  // Simulate logout function
  const logout = () => setIsAuthenticated(false);

  // Return the current authentication state and the login/logout methods
  return {
    isAuthenticated,
    login,
    logout,
  };
}
