import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route index element={<Profile />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
