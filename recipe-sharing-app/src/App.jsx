import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router and routing components
import RecipeList from './components/RecipeList'; // Recipe list component
import RecipeDetails from './components/RecipeDetails'; // Recipe details component
import AddRecipeForm from './components/AddRecipeForm'; // Add recipe form component
import EditRecipeForm from './components/EditRecipeForm'; // Edit recipe form component (if you have this)

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<RecipeList />} /> {/* Home route to show all recipes */}
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Route to show individual recipe details */}
        <Route path="/add" element={<AddRecipeForm />} /> {/* Route for adding a new recipe */}
        <Route path="/edit/:id" element={<EditRecipeForm />} /> {/* Route for editing a recipe */}
      </Routes>
    </Router>
  );
};

export default App;
