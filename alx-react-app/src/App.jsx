// src/App.jsx
import HelloWorld from './HelloWorld'; // Import HelloWorld component
import UserProfileCard from './UserProfileCard'; // Import UserProfileCard component
import Counter from './Counter'; // Import Counter component

function App() {
    return (
        <div>
            <HelloWorld />
            <UserProfileCard 
                name="John Doe"
                email="john.doe@example.com"
                profilePicture="https://via.placeholder.com/100"
            />
            <Counter />
        </div>
    );
}

export default App; // Export the App component
