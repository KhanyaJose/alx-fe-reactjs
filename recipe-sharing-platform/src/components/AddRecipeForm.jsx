import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (formData.ingredients.split(',').length < 2) {
      newErrors.ingredients = 'At least two ingredients are required.';
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      navigate('/'); // Redirect to homepage after submission
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Add a New Recipe
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-lg"
      >
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div className="mb-4">
          <label className="block text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            value={formData.ingredients}
            onChange={(e) => handleChange('ingredients', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter ingredients, separated by commas"
            rows="4"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-4">
          <label className="block text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={formData.steps}
            onChange={(e) => handleChange('steps', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            placeholder="Enter preparation steps"
            rows="6"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all md:text-lg"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
