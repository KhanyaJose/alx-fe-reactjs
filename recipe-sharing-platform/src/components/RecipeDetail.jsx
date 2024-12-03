import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const recipeData = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeData);
      })
      .catch((error) => console.error('Error loading recipe details:', error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg">Recipe not found.</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Go Back to Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{recipe.title}</h1>
      <div className="max-w-4xl w-full">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
        />
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Ingredients</h2>
          
          {recipe.ingredients && Array.isArray(recipe.ingredients) ? (
            <ul className="list-disc pl-5 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">No ingredients available.</p>
          )}
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Cooking Instructions</h2>
          <p className="text-gray-700">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
