const FlashSale = () => {
  const FlashSaleItems = [
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
    {
      name: "lorem ipsum",
    },
  ];
  return (
    <>
      <div className="flex justify-center px-10">
        <a
          href="#snap1"
          className="btn btn-circle absolute left-5 -bottom-[680px]"
        >
          ❮
        </a>
        <a
          href="#snap7"
          className="btn btn-circle absolute right-5 -bottom-[680px]"
        >
          ❯
        </a>
        <div className="carousel bg-neutral carousel-center rounded-box w-full space-x-4 p-4 m-10">
          <div className="carousel-item" id="snap1">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap3">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap4">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap6">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item" id="snap7">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSale;
