"use client";
import FoodCard from "./components/FoodCard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function Home() {
  type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
};


  const [allMeals, setAllMeals] = useState<Meal[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
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
    <div className="bg-[url('/bg-noodle.webp')] h-dvh bg-no-repeat w-full bg-contain bg-bottom overflow-x-hidden p-2">
      {/* 🔹 Header */}
      {/* 🔹 Header with search callback */}
      <Header onSearch={(q) => setQuery(q)} />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={"/paprika.webp"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed md:drop-shadow-2xl drop-shadow-xl ml-[10vw] drop-shadow-[#fad52f88] w-[14vw] md:w-[10vw] "
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
          src={"/meat.webp"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed md:drop-shadow-2xl drop-shadow-xl ml-[85vw] -mt-[15vw]  w-[14vw] md:w-[10vw] drop-shadow-[#da3b29af]"
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
          src={"/basil.webp"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed md:drop-shadow-2xl drop-shadow-xl ml-[5vw] -mt-[15vw]  w-[14vw] md:w-[10vw] drop-shadow-[#284917c7]"
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
          src={"/chili.webp"}
          width={150}
          height={150}
          alt="paprika"
          className="fixed md:drop-shadow-2xl drop-shadow-xl ml-[80vw] drop-shadow-[#ff00009d] w-[14vw] md:w-[10vw] "
        ></Image>
      </motion.div>
      {/* 🔹 Cards with motion */}
      <div className="mt-[5vw] w-full h-fit flex-col">
        <div className="flex justify-end mr-[18vw]">
          <button
            onClick={() => shuffleMeals()}
            className="md:p-[0.4vw] p-[1vw] rounded-full bg-[#FCBC30] hover:rotate-180 transition"
          >
            <Image
              src={"/reload-data-1.svg"}
              width={50}
              height={50}
              alt="reload"
              className="md:w-[4vw] w-[6vw]"
            ></Image>
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 w-full justify-center">
          <AnimatePresence mode="wait">
            {meals.map((meal) => (
              <motion.div
                key={meal.idMeal}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Link href={`/meal/${meal.idMeal}`}>
                  <FoodCard
                    foodName={meal.strMeal}
                    image={meal.strMealThumb}
                    category={meal.strCategory}
                    area={meal.strArea}
                  />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
