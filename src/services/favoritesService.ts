export interface FavoriteMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
}

// Check if localStorage is available
const isLocalStorageAvailable = (): boolean => {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const getFavorites = (): FavoriteMeal[] => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available');
    return [];
  }
  
  try {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error getting favorites:', error);
    return [];
  }
};

export const addToFavorites = (meal: FavoriteMeal): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available');
    return;
  }
  
  try {
    const favorites = getFavorites();
    const isAlreadyFavorite = favorites.some(fav => fav.idMeal === meal.idMeal);
    
    if (!isAlreadyFavorite) {
      favorites.push(meal);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const removeFromFavorites = (mealId: string): void => {
  if (!isLocalStorageAvailable()) {
    console.warn('localStorage is not available');
    return;
  }
  
  try {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(fav => fav.idMeal !== mealId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};

export const isFavorite = (mealId: string): boolean => {
  if (!isLocalStorageAvailable()) {
    return false;
  }
  
  try {
    const favorites = getFavorites();
    return favorites.some(fav => fav.idMeal === mealId);
  } catch (error) {
    console.error('Error checking favorite status:', error);
    return false;
  }
}; 