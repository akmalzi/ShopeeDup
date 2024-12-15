import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-3 gap-2 ">
        <div className="row-span-2 col-span-2">
          <Carousel />
        </div>
        <div className="">
          <img
            src="https://cf.shopee.co.id/file/id-11134258-7ras9-m1dvckjj54112c_xhdpi"
            alt=""
          />
        </div>
        <div className="">
          {" "}
          <img
            src="https://cf.shopee.co.id/file/id-11134258-7rasd-m1dwe17djcvbd0_xhdpi"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
