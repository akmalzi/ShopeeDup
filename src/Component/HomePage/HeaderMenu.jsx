const HeaderMenu = () => {
  const iconLink = [
    {
      name: "Shopee Pilih Lokal",
      link: "/assets/Homepage/Menu-icon/shopee-mall.png",
    },
    {
      name: "Shopee Mall",
      link: "/assets/Homepage/Menu-icon/shopee-mall.png",
    },
    {
      name: "Pulsa, Tagihan, dan Tiket",
      link: "/assets/Homepage/Menu-icon/pulsa.png",
    },
    {
      name: "inFashion",
      link: "/assets/Homepage/Menu-icon/pulsa.png",
    },
    {
      name: "Shopee Supermarket",
      link: "/assets/Homepage/Menu-icon/shopee-supermarket.png",
    },
    {
      name: "Bayar Di Tempat",
      link: "/assets/Homepage/Menu-icon/cod.png",
    },
    {
      name: "Termurah di Shopee",
      link: "/assets/Homepage/Menu-icon/termurah-shopee.png",
    },
    {
      name: "Gratis Ongkir dan Voucher",
      link: "/assets/Homepage/Menu-icon/gratis-ongkir.png",
    },
    {
      name: "Shopee Barokah",
      link: "/assets/Homepage/Menu-icon/shopee-barokah.png",
    },
    {
      name: "Semua Promo",
      link: "/assets/Homepage/Menu-icon/semua-promo.png",
    },
  ];

  return (
    <>
      <div className="flex justify-between mt-5 ">
        {iconLink.map((value, index) => {
          return (
            <div key={index} className=" w-32 py-5 hover:-translate-y-1">
              <img
                width={60}
                src={value.link}
                alt={value.link}
                className="border-2 border-gray-300 solid rounded-[20px] mx-auto "
              />
              <div className="font-semibold text-center text-sm">
                {value.name}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenu;
