import { useState, useEffect } from 'react';
import { getFavorites, removeFromFavorites } from '../services/favoritesService';
import type { FavoriteMeal } from '../services/favoritesService';
import MealCard from '../components/MealCard';
import { Heart, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteMeal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (mealId: string) => {
    removeFromFavorites(mealId);
    setFavorites(getFavorites()); // Refresh the list
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className='text-sm text-orange-500 flex items-center gap-1'
          >
            <ArrowLeftIcon className='w-4 h-4' />
            Back to home
          </button>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <h1 className="text-3xl font-bold text-gray-800">My Favorites</h1>
          </div>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No favorites yet</h2>
            <p className="text-gray-500 mb-6">Start exploring recipes and add your favorites!</p>
            <button
              onClick={() => navigate('/')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Explore Recipes
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-6">
              You have {favorites.length} favorite recipe{favorites.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {favorites.map((meal) => (
                <div key={meal.idMeal} className="relative group">
                  <MealCard
                    id={meal.idMeal}
                    title={meal.strMeal}
                    image={meal.strMealThumb}
                    category={meal.strCategory}
                    area={meal.strArea}
                  />
                  <button
                    onClick={() => handleRemoveFavorite(meal.idMeal)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    title="Remove from favorites"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 