import React from "react";
import Image from "next/image";
import { motion } from "motion/react"; // ✅ better import style

const FoodCard = ({ image, foodName, category, area }) => {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <div className="flex flex-col gap-4 bg-[#F9FAFB] hover:bg-[#FCBC30] hover:opacity-100 hover:text-white text-black h-[15vw] opacity-60 items-center  rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <Image
            src={image}
            width={200}
            className="-mt-[5vw] rounded-full object-center shadow-xl border-2 border-white"
            height={200}
            alt="Food"
          ></Image>
          <h2 className="font-bold text-2xl">{foodName}</h2>
          <div className="flex w-full justify-between items-center border-t-2 border-b-2 py-2">
            <p>{category}</p>
            <p>{area}</p>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default FoodCard;
