import FlashSale from "../Component/HomePage/FlashSale";
import HeaderMenu from "../Component/HomePage/HeaderMenu";
import HeroSection from "../Component/HomePage/HeroSection";
import Kategori from "../Component/HomePage/Kategori";

const Homepage = () => {
  return (
    <>
      <section className="font-['Roboto']">
        <div className="p-10 bg-white">
          <HeroSection />
          <HeaderMenu />
        </div>
        <Kategori />
        <FlashSale />
      </section>
    </>
  );
};

export default Homepage;
