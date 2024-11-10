// src/App.jsx
import Header from './components/Header'; // Import Header component
import MainContent from './components/MainContent'; // Import MainContent component
import Footer from './components/Footer'; // Import Footer component
import HelloWorld from './HelloWorld'; // Import HelloWorld component
import UserProfileCard from './UserProfileCard'; // Import UserProfileCard component
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // Import UserProfile component
import Counter from './components/Counter'; // Import the Counter component

function App() {
    return (
        <div>
            <Header /> {/* Include Header */}
            <MainContent /> {/* Include Main Content */}
            <Counter /> {/*Adding the Counter component hewe*/}
            <Footer /> {/* Include Footer */}

            <WelcomeMessage /> {/* This is the WelcomeMessage component */}
            <HelloWorld />
            <UserProfileCard 
                name="John Doe"
                email="john.doe@example.com"
                profilePicture="https://via.placeholder.com/100"
            />
            
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
