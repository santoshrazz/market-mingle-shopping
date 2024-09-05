import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full bg-slate-200 p-4">
      <div className="input flex justify-center items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs px-4 py-2 rounded-md hover:border-none hover:outline-none focus:outline-none"
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
