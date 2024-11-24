// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Get authentication status

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected content if authenticated
}

export default ProtectedRoute;
