"use client";
import FoodCard from "./components/FoodCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

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

      <Header></Header>

      {/* 🔹 Cards with motion */}
      <div className="flex flex-row gap-10 w-full justify-center mt-[10vw]">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="relative w-60 h-60">
            <Link href={`/meal/${meal.idMeal}`}>
              <FoodCard
                foodName={meal.strMeal}
                image={meal.strMealThumb}
                category={meal.strCategory}
                area={meal.strArea}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
