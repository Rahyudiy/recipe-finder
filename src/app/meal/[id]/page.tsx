"use client";

import { p } from "motion/react-client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
      <div className="h-dvh w-full text-center p-10 bg-auto flex pt-[10vw] justify-center text-black bg-no-repeat bg-center bg-[url('/paper-2.png')]">
        <div className="w-[40vw]">
          <h1>{meal.strMeal}</h1>

          <p>{meal.strInstructions}</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            obcaecati harum iste delectus nam vitae vero aliquid enim iure
            ipsam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
