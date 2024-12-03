import { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <a
              href={`/recipes/${recipe.id}`}
              className="block mt-4 text-indigo-500 hover:underline"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;