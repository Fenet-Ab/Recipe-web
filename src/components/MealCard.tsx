import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRightIcon, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { addToFavorites, removeFromFavorites, isFavorite } from '../services/favoritesService';

type Props = {
  id: string;
  title: string;
  image: string;
  category?: string;
  area?: string;
};

export default function MealCard({ id, title, image, category, area }: Props) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking favorite button
    e.stopPropagation();
    
    if (favorite) {
      removeFromFavorites(id);
      setFavorite(false);
    } else {
      addToFavorites({
        idMeal: id,
        strMeal: title,
        strMealThumb: image,
        strCategory: category,
        strArea: area
      });
      setFavorite(true);
    }
  };

  return (
    <div className="relative group">
      <Link to={`/meal/${id}`}>
        <Card className="hover:shadow-xl transition w-full max-w-sm">
          <div className="relative">
            <img src={image} alt={title} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-xl" />
          </div>
          <CardContent className="p-3 sm:p-4">
            <h2 className="text-xl md:text-lg font-semibold mt-2 line-clamp-2">{title}</h2>
            <a href="#" className='text-sm text-orange-500 flex items-center gap-1'>See Detail <ArrowRightIcon className='w-4 h-4'/></a>
          </CardContent>
        </Card>
      </Link>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 p-2 bg-orange/80 hover:bg-gray-500 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
      >
        <Heart 
          className={`w-5 h-5 ${favorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
        />
      </button>
    </div>
  );
}
