import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="h-20 w-full flex items-center justify-around bg-[#1c212c]">
        <p></p>
        <div className="typewriter w-92 hidden md:block">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            MarketMingle
          </h1>
        </div>
        <div className="buttons flex gap-5">
          <Link href={"/login"}>
            <button className="Login bg-white text-black px-4 rounded-md py-2">
              Login
            </button>
          </Link>
          <Link href={"/cart"}>
            <button className="Login bg-white text-black px-4 rounded-md py-2">
              Cart
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
