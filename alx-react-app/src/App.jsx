// src/App.jsx
import HelloWorld from './HelloWorld'; // Import HelloWorld component
import UserProfileCard from './UserProfileCard'; // Import UserProfileCard component
import Counter from './Counter'; // Import Counter component
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header'; // Import Header component
import MainContent from './MainContent'; // Import MainContent component
import Footer from './Footer'; // Import Footer component

function App() {
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
        </div>
    );
}

export default App; // Export the App component
