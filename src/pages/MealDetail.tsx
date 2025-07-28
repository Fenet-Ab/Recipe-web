import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMealById } from "../services/mealAPI";

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState<any>(null);

  useEffect(() => {
    if (id) {
        fetchMealById(id).then(setMeal);
    }
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center md:text-left">{meal.strMeal}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-lg mb-4" />
          <div className="space-y-2">
            <p className="text-orange-400 text-sm md:text-base"><strong>Category:</strong> {meal.strCategory}</p>
            <p className="text-orange-400 text-sm md:text-base"><strong>Area:</strong> {meal.strArea}</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">{meal.strInstructions}</p>
        </div>
      </div>
      {meal.strYoutube && (
        <div className="mt-6">
          <iframe
            title="video"
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
