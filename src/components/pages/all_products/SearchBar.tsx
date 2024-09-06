"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState, KeyboardEvent } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigator = useRouter();
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigator.push(`/allproducts/${search}`);
    }
  };
  return (
    <div className="w-full bg-slate-200 p-4">
      <div className="input flex justify-center items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs px-4 py-2 rounded-md hover:border-none hover:outline-none focus:outline-none"
          onChange={handleOnChange}
          value={search}
          onKeyDown={handleOnKeyDown}
        />
        {/* <Image
          src={"/search.png"}
          width={50}
          height={50}
          alt="search icon"
          className="rounded-md ml-[-15px]"
        /> */}
        <Image
          src={"/close.png"}
          width={20}
          height={20}
          alt="search icon"
          className="rounded-md ml-[-25px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchBar;
