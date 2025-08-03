import { useEffect, useState } from "react";
import { fetchMeals, fetchMealsByCategory } from "../services/mealAPI";
import MealCard from "../components/MealCard";
import SearchBar from "../components/SearchBar";
import { meal3 } from '../assets/asset'

import CategoryTabs from "../components/CategoryTabs";

export default function Home() {
    const [meals, setMeals] = useState([]);


    const handleSearch = async (query: string, type: string) => {
        const result = await fetchMeals(query, type);
        setMeals(result);
    };


    const handleCategory = async (category: string) => {
        const result = await fetchMealsByCategory(category);
        setMeals(result);
    };

    useEffect(() => {
        handleSearch("chicken", "name");
    }, []);

    return (
        <div className=" w-full">
                         <div className="flex flex-col bg-cover bg-center w-full h-screen relative" style={{ backgroundImage: `url(${meal3})` }}>

                 <div className="flex justify-center w-full pt-20 sm:pt-30">
                     <SearchBar onSearch={handleSearch} />
                 </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                 <div className="   rounded-xl w-11/12 sm:w-3/4 md:w-1/2 mx-auto text-center p-4 sm:p-6 mt-8 opacity-100">
                     <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Discover Delicious Recipes</h1>
                     <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                         Find your next favorite meal from around the world. Search by ingredients, explore categories,
                         or get inspired with a random dish. Cooking has never been this fun and easy!
                     </p>
                 </div>


            </div>

            <div className="  mx-auto flex flex-col justify-center items-center mt-20"  >
                <h1 className="text-gray-800 text-3xl  mb-6 underline decoration-yellow-500 cursor-pointer">Pick a category</h1>
                <h2 className="text-gray-700 text-4xl font-bold mb-10">Choose what suits you</h2>
                <CategoryTabs onSelect={handleCategory} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
                    {meals?.map((meal: any) => (
                        <MealCard 
                            key={meal.idMeal} 
                            id={meal.idMeal} 
                            title={meal.strMeal} 
                            image={meal.strMealThumb}
                            category={meal.strCategory}
                            area={meal.strArea}
                        />
                    ))}
                </div>
            </div>


        </div>
    );
}
