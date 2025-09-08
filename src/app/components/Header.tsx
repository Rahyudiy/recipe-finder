import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }: { onSearch: (q: string) => void }) => {
  return (
    <div>
      <nav className="flex justify-end">
        {/* pass down search handler */}
        <SearchBar onSearch={onSearch} />
      </nav>
      <div className="flex flex-col w-full justify-center items-center text-[#FFBE41]">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={100}
          height={100}
          className="md:w-[6vw] w-[12vw]"
        />
        <h1 className="uppercase font-extrabold md:text-[5vw] text-[8vw] tracking-tighter">
          recipes
        </h1>
        <div className="text-center md:text-[1vw] text-[2.5vw] tracking-tight">
          <p>&quot;TastyVerse is a universe of flavors, </p>
          <p>
            bringing recipes from every corner of the world to your kitchen.&quot;
            🍜✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
