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
    console.log(allProducts);
  } catch (error: any) {
    console.log(error.message);
  }
  return <div>This is search with query = {params.search}</div>;
};

export default page;
