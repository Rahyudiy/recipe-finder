import { p } from "motion/react-client";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await res.json();

  return (
    <div className="">
      <div className="flex flex-col w-full justify-center items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100}></Image>
        <h1 className="uppercase font-extrabold text-[#FFBE41] text-[5vw] tracking-tighter">
          recipes
        </h1>
        <div className="text-center text-[#FFBE41] text-[1vw] tracking-tight">
          <p>"TastyVerse is a universe of flavors, </p>
          <p>
            bringing recipes from every corner of the world to your kitchen."
            🍜✨
          </p>
        </div>
      </div>
      <div className="relative w-60 h-60">
        {/* Food Image */}
        <Image
          src="https://www.themealdb.com/images/media/meals/xd9aj21740432378.jpg"
          alt="Food"
          width={240}
          height={240}
          className="rounded-full object-cover border-4 border-gray-300"
        />

        {/* Text Circle */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
          <defs>
            <path
              id="circlePath"
              d="M 150, 150
                 m -120, 0
                 a 120,120 0 1,1 240,0
                 a 120,120 0 1,1 -240,0"
            />
          </defs>
          <text fill="black" fontSize="18" fontWeight="bold">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              🍴 Delicious Pasta • Food Paradise • Yummy Dish 🍴
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
