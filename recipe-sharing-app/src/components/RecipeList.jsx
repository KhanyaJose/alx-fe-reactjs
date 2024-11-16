// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import RecipeCard from './RecipeCard'; 

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes); 
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); 
  const filterRecipes = useRecipeStore(state => state.filterRecipes); 

  useEffect(() => {
    filterRecipes(); 
  }, [recipes]);

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
