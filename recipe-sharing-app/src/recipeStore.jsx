import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [], // Initial state
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Action to add a recipe
  setRecipes: (recipes) => set({ recipes }), // Action to set the recipe list
}));
