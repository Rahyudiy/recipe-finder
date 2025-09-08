"use client";
import React, { useState } from "react";
import Image from "next/image";

const SearchBar = ({ onSearch }: { onSearch: (q: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input); // 🔥 send query to parent
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between md:w-fit w-full outline-2 outline-black md:rounded-full rounded-none bg-white/10 shadow-xl text-white"
    >
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search recipes..."
        className="md:w-[15vw] w-full p-2 rounded-full outline-none"
      />
      <button type="submit">
        <Image
          src={"/logo.png"}
          alt="Search"
          width={40}
          height={40}
          className="object-contain cursor-pointer"
        />
      </button>
    </form>
  );
};

export default SearchBar;
