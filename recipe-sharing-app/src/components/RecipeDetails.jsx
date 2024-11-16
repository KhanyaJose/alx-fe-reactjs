import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>
      <button onClick={() => useRecipeStore.getState().deleteRecipe(recipe.id)}>
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeDetails;
