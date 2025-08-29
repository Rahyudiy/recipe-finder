import React from "react";
import Image from "next/image";
const SearchBar = () => {
  return (
    <div className="flex justify-between w-fit outline-2 outline-black rounded-full bg-white/10 shadow-xl text-black">
      <input type="search" className="w-[15vw] p-2 rounded-full outline-none" />
      <Image src={"/logo.png"} alt="src" width={40} height={40} className="object-contain"></Image>
    </div>
  );
};

export default SearchBar;
