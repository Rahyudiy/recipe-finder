"use client";
import FoodCard from "./components/FoodCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  const [allMeals, setAllMeals] = useState<any[]>([]);
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
        setAllMeals(data.meals);
        shuffleMeals(data.meals);
      } else {
        setMeals([]);
      }
    };

    fetchMeals();
  }, [query]);

  const shuffleMeals = (list = allMeals) => {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    setMeals(shuffled.slice(0, 3));
  };

  return (
    <div className="bg-[url('/bg-noodle.png')] h-dvh bg-no-repeat w-full bg-contain bg-bottom overflow-x-hidden">
      {/* 🔹 Header */}
      <Header></Header>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/paprika.png"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed drop-shadow-2xl ml-[10vw] drop-shadow-[#fad52f88]"
        ></Image>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/meat.png"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed drop-shadow-2xl ml-[85vw] -mt-[15vw] drop-shadow-[#da3b29af]"
        ></Image>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/basil.png"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed drop-shadow-2xl ml-[5vw] -mt-[15vw] drop-shadow-[#284917c7]"
        ></Image>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/chili.png"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed drop-shadow-2xl ml-[80vw] drop-shadow-[#ff00009d]"
        ></Image>
      </motion.div>
      {/* 🔹 Cards with motion */}
      <div className="mt-[10vw] w-full h-fit flex-col">
        <button onClick={() => shuffleMeals()}>as</button>
        <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center">
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
    </div>
  );
}
