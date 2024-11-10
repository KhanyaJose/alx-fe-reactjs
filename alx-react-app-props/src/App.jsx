// src/App.jsx
import React from 'react';
import Header from './components/Header'; // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import HelloWorld from './HelloWorld'; // Import HelloWorld component
import UserProfileCard from './UserProfileCard'; // Import UserProfileCard component
import Counter from './Counter'; // Import Counter component
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // Import UserProfile component
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <div>
            <Header /> {/* Include Header */}
            <MainContent /> {/* Include Main Content */}
            <Footer /> {/* Include Footer */}

            <WelcomeMessage /> {/* This is the WelcomeMessage component */}
            <HelloWorld />
            <UserProfileCard 
                name="John Doe"
                email="john.doe@example.com"
                profilePicture="https://via.placeholder.com/100"
            />
            <Counter />
            {/* Using UserProfile component with props */}
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
        </div>
    );
}

export default App; // Export the App component
