import ProductListingPage from "@/components/pages/product-list/Product_List";
import { productType } from "@/types/types";
import axios from "axios";
import React from "react";

const page = async () => {
  let allProducts: productType[] | [] = [];
  try {
    const products = await axios.get(
      `${process.env.BACKEND_BASE_URL}/api/v1/product/getProduct`
    );
    allProducts = products.data.allProducts;
  } catch (error: any) {
    console.log(error.message);
  }
  return (
    <div>
      <ProductListingPage initialProducts={allProducts} />
    </div>
  );
};

export default page;
