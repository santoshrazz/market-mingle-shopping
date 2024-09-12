import { productType } from "@/types/types";
import axios from "axios";
import React from "react";
import ProductDetails from "@/components/pages/product-details/Product_Details";

const page = async ({ params }: { params: { productId: String } }) => {
  const link = `${process.env.BACKEND_BASE_URL}/api/v1/product/getProduct/${params.productId}`;
  const product = await axios.get(link);
  const singleProduct: productType = product.data.singleProduct;
  return <ProductDetails product={singleProduct} />;
};

export default page;
