import Navbar from "@/components/Navbar";
import NavbarSlide from "../components/Navbar_Slide";
import Trending_Product from "@/components/pages/Trending_Product";
import Hero from "@/components/pages/Hero";
import Best_Deal from "@/components/pages/Best_Deal";

export default function Home() {
  return (
    <>
      <NavbarSlide />
      <Navbar />
      <Hero />
      <Best_Deal />
      <Trending_Product />
    </>
  );
}
