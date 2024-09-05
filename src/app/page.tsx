import Navbar from "@/components/Navbars/Navbar";
import NavbarSlide from "../components/Navbars/Navbar_Slide";
import Trending_Product from "@/components/pages/Trending_Product";
import Hero from "@/components/pages/Hero/Hero";
import Best_Deal from "@/components/pages/Best_Deals/Best_Deal";
import ShopByCategory from "@/components/pages/ShopByCategory/ShopByCategory";
import All_Products from "@/components/pages/all_products/All_Products";

export default function Home() {
  return (
    <>
      <All_Products />
      {/* <NavbarSlide />
      <Navbar />
      <Hero />
      <Best_Deal />
      <ShopByCategory />
      <Trending_Product /> */}
    </>
  );
}
