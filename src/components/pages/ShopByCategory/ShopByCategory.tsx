import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopByCategory = () => {
  return (
    <div className="">
      <h2 className="text-2xl text-center font-semibold my-2">
        Top Deals on Appliences
      </h2>
      <div className="wrapper my-4 py-4 w-full flex flex-wrap items-center bg-slate-200 gap-5">
        <Link href={"/"}>
          <div className=" bg-white mx-auto my-4 mt-11 w-72 md:w-80 transform overflow-hidden rounded-lg  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="/fan.png"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Home Appliences
              </h2>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Starts From
                </p>
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className=" bg-white mx-auto my-4 mt-11 w-72 md:w-80 transform overflow-hidden rounded-lg  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="/fan.png"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Home Appliences
              </h2>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Starts From
                </p>
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className=" bg-white mx-auto my-4 mt-11 w-72 md:w-80 transform overflow-hidden rounded-lg  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="/fan.png"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Home Appliences
              </h2>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Starts From
                </p>
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className=" bg-white mx-auto my-4 mt-11 w-72 md:w-80 transform overflow-hidden rounded-lg  dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="/fan.png"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Home Appliences
              </h2>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Starts From
                </p>
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
