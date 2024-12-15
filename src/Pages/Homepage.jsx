import HeaderMenu from "../Component/HomePage/HeaderMenu";
import HeroSection from "../Component/HomePage/HeroSection";
import Kategori from "../Component/HomePage/Kategori";

const Homepage = () => {
  return (
    <>
      <div className="p-10 bg-white">
        <HeroSection />
        <HeaderMenu />
      </div>
      <div className="w-full p-10">
        <Kategori />
      </div>
    </>
  );
};

export default Homepage;
