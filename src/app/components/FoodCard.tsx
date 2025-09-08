import React from "react";
import Image from "next/image";
import { motion } from "motion/react"; // ✅ better import style

type FoodCardProps = {
  image: string;
  foodName: string;
  category: string;
  area: string;
};

const FoodCard = ({ image, foodName, category, area }: FoodCardProps) => {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <div className="flex flex-col md:gap-[1vw] gap-[2vw] md:w-fit w-full md:min-w-fit min-w-[40vw] h-fit bg-[#F9FAFB] hover:bg-[#FCBC30] hover:opacity-100 hover:text-white text-black opacity-80 items-center md:rounded-2xl rounded-md md:p-[2vw] p-[4vw] shadow-lg hover:shadow-xl transition">
          <Image
            src={image}
            width={150}
            className="md:-mt-[5vw] -mt-[10vw] rounded-full object-center shadow-xl border-2 border-white w-[20vw] md:w-[12vw]"
            height={150}
            alt="Food"
          ></Image>
          <h2 className="font-bold md:text-[2vw] text-[4vw]">{foodName}</h2>
          <div className="flex w-full justify-between items-center border-t-2 border-b-2 py-2 text-[2vw] md:text-[1vw]">
            <p>{category}</p>
            <p>{area}</p>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default FoodCard;
