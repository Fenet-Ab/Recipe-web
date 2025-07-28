import React, { useState } from 'react'
import { Button } from './ui/button'
import { fetchRandomMeal } from '@/services/mealAPI';
import { useNavigate } from 'react-router-dom';





const Header = () => {
    const navigate = useNavigate();
    
    const handleRandom = async () => {
        const meal = await fetchRandomMeal();
        navigate(`/meal/${meal.idMeal}`);
      };
   
   return (
      <div className='flex justify-between  bg-orange-500 p-2'>
           <h1 className="text-3xl font-bold mb-4 text-white cursor-pointer" onClick={()=>navigate('/')}>🍽️ Recipe Explorer</h1>
           <Button className="mt-2 p-2 bg-white  text-orange-400 border-gray-500 mr-4 hover:text-white" onClick={handleRandom}>🎲 Random Meal</Button>
         
  
      </div>
    )
  }
  
  export default Header