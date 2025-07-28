import axios from "axios";
const BASE = "https://www.themealdb.com/api/json/v1/1";

export const fetchMeals = async (query: string, type: string) => {
  try {
    if (type === "name") {
      const res = await axios.get(`${BASE}/search.php?s=${query}`);
      return res.data.meals || [];
    } else if (type === "ingredient") {
      const res = await axios.get(`${BASE}/filter.php?i=${query}`);
      return res.data.meals || [];
    } else if (type === "category") {
      const res = await axios.get(`${BASE}/filter.php?c=${query}`);
      return res.data.meals || [];
    }
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};

export const fetchRandomMeal = async () => {
  try {
    const res = await axios.get(`${BASE}/random.php`);
    return res.data.meals[0];
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};

export const fetchMealById = async (id: string) => {
  try {
    const res = await axios.get(`${BASE}/lookup.php?i=${id}`);
    return res.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal by ID:', error);
    return null;
  }
};

export const fetchMealsByCategory = async (category: string) => {
  try {
    const res = await axios.get(`${BASE}/filter.php?c=${category}`);
    return res.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    return [];
  }
};
