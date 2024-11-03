// src/UserProfileCard.js
function UserProfileCard({ name, email, profilePicture }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
            <img src={profilePicture} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default UserProfileCard; // Export the UserProfileCard component
