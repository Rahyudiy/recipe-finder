"use client";

import { image, p } from "motion/react-client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<any>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setMeal(data.meals ? data.meals[0] : null);
    };

    if (id) fetchMeal();
  }, [id]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="">
      <div className="h-dvh w-full text-center md:p-10 p-4 flex md:flex-row-reverse flex-col md:gap-10 gap-5 md:justify-evenly text-black bg-no-repeat bg-center bg-[#083103]">
        <div className="bg-white md:w-[30vw] w-full flex items-center flex-col p-4 md:rounded-2xl rounded-md">
          <Image
            src={meal.strMealThumb}
            width={150}
            height={150}
            alt="food"
            className="md:w-[10vw] md:rounded-2xl rounded-md w-[50vw]"
          ></Image>
          <div className="w-full p-4">
            <h1 className="font-semibold md:text-[1.5vw] text-[4vw]">{meal.strMeal}</h1>
            <div className="flex justify-evenly md:text-[1vw] text-[2vw] my-[1vw]">
              <p>{meal.strCategory}</p>
              <p>{meal.strArea}</p>
            </div>
            <a
              href={meal.strYoutube}
              className="md:text-[1vw] text-[2vw] text-blue-500 underline"
            >
              Watch tutorial
            </a>
          </div>
            <Link href={`/`} className="p-2 rounded-full w-fit bg-[#FCBC30]"><Image src={"/back.svg"} width={150} height={150} className="md:w-[2vw] w-[4vw]" alt="back"></Image></Link>
        </div>
        <div className="w-full bg-white p-4 rounded-2xl text-justify">
          <h2 className="font-semibold md:text-[1.2vw] text-[2vw] mb-2">Ingredients</h2>
          <ul className="list-disc list-inside md:text-[1vw] text-[2vw]">
            {(() => {
              const items = [];
              for (let i = 1; i <= 20; i++) {
                const ingredient =
                  meal[`strIngredient${i}` as keyof typeof meal];
                const measure = meal[`strMeasure${i}` as keyof typeof meal];

                if (ingredient && ingredient.trim() !== "") {
                  items.push(
                    <li key={i}>
                      {ingredient} – {measure}
                    </li>
                  );
                }
              }
              return items;
            })()}
          </ul>

          <h2 className="font-semibold md:text-[1.2vw] text-[2vw] mb-2 mt-[2vw]">Instructions</h2>
          <p className="md:text-[1vw] text-[2vw]">{meal.strInstructions}</p>

          {/* here the ingredent, */}
        </div>
      </div>
    </div>
  );
};

export default page;
