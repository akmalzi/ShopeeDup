const Carousel = () => {
  return (
    <div className=" carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full bg-green-700">
        <img
          src="https://cf.shopee.co.id/file/id-11134258-7rasl-m267abg1z1fd65_xxhdpi"
          className="w-full "
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://cf.shopee.co.id/file/id-11134258-7r98o-m0bdmvjtcuz013_xxhdpi"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cf.shopee.co.id/file/id-11134258-7rasm-m2ryzd6mawov92_xxhdpi"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;