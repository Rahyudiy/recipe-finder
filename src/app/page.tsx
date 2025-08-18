"use client";

import Image from "next/image";
import FoodCard from "./components/FoodCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [meals, setMeals] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();

      if (data.meals) {
        // 🔀 Shuffle & limit to 3
        const shuffled = [...data.meals].sort(() => Math.random() - 0.5);
        setMeals(shuffled.slice(0, 3));
      } else {
        setMeals([]);
      }
    };

    fetchMeals();
  }, [query]);

  return (
    <div className="">
      {/* 🔹 Header */}
      <div className="flex flex-col w-full justify-center items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="uppercase font-extrabold text-[#292929] text-[5vw] tracking-tighter">
          recipes
        </h1>
        <div className="text-center text-[#292929] text-[1vw] tracking-tight">
          <p>"TastyVerse is a universe of flavors, </p>
          <p>
            bringing recipes from every corner of the world to your kitchen."
            🍜✨
          </p>
        </div>
      </div>

      {/* 🔹 Cards with motion */}
      <div className="flex flex-row gap-10 w-full justify-center mt-[10vw]">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="relative w-60 h-60">
            <FoodCard
              foodName={meal.strMeal}
              image={meal.strMealThumb}
              category={meal.strCategory}
              area={meal.strArea}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
