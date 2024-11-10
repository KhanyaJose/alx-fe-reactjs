// src/components/UserProfile.jsx
import React, { useContext } from 'react'; // Import React and useContext
import { UserContext } from './UserContext'; // Import UserContext to access the context

function UserProfile() {
    // Access userData from context using useContext
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserProfile;
