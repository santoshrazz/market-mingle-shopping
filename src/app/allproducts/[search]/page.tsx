import SearchBar from "@/components/pages/all_products/SearchBar";
import { productType } from "@/types/types";
import axios from "axios";
import React from "react";

const page = async ({ params }: { params: { search: String } }) => {
  let allProducts: productType[] | [] = [];
  try {
    const products = await axios.get(
      `${process.env.BACKEND_BASE_URL}/api/v1/product/searchProduct?search=${params.search}`
    );
    allProducts = products.data.products;
  } catch (error: any) {
    console.log(error.message);
  }
  return (
    <>
      <SearchBar />
      <div className="main flex bg-slate-200 ">
        {/* Starting Products */}
        <div className="wrapper  h-40 flex"></div>
        <div className="font-[sans-serif] ">
          <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
              {params.search}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              {allProducts.map((singleProduct: productType, ind: number) => {
                return (
                  <div
                    className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
                    key={ind}
                  >
                    <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>

                    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                      <img
                        src={String(singleProduct.images[0]?.imageUrl)}
                        alt="Product 1"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-gray-800">
                        {singleProduct.title.slice(0, 30)}...
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {singleProduct.description.slice(0, 70)}...
                      </p>
                      <div className="price flex gap-3">
                        <h4 className="text-lg text-gray-800 font-bold mt-4">
                          {String(singleProduct.price)}
                        </h4>
                        <h4 className="text-lg text-gray-800 font-bold mt-4">
                          {String(singleProduct.price)}
                        </h4>
                      </div>
                      <button className="bg-blue-600 text-white p-2 m-auto">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
