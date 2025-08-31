import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-end p-4">
        <SearchBar></SearchBar>
      </nav>
      <div className="flex flex-col w-full justify-center items-center text-[#FFBE41]">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="uppercase font-extrabold  text-[5vw] tracking-tighter">
          recipes
        </h1>
        <div className="text-center  text-[1vw] tracking-tight">
          <p>"TastyVerse is a universe of flavors, </p>
          <p>
            bringing recipes from every corner of the world to your kitchen."
            🍜✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
