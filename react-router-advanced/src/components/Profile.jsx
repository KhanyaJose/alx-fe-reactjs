import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <a href="/profile/details">Details</a>
        <a href="/profile/settings">Settings</a>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
