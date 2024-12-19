const Kategori = () => {
  const KategoriList = [
    {
      image: "/assets/Homepage/Kategori/elektronik.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/komputer-aksesoris.webp",
      name: "Komputer & Aksesoris",
    },
    {
      image: "/assets/Homepage/Kategori/handphone-aksesoris.webp",
      name: "Handphone & Aksesoris",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Pakaian Pria",
    },
    {
      image: "/assets/Homepage/Kategori/sepatu-pria.webp",
      name: "Sepatu Pria",
    },
    {
      image: "/assets/Homepage/Kategori/tas-pria.webp",
      name: "Tas Pria",
    },
    {
      image: "/assets/Homepage/Kategori/aksesoris-fashion.webp",
      name: "Aksesoris & Fashion",
    },
    {
      image: "/assets/Homepage/Kategori/jam-tangan.webp",
      name: "Jam Tangan",
    },
    {
      image: "/assets/Homepage/Kategori/kesehatan.webp",
      name: "Kesehatan",
    },
    {
      image: "/assets/Homepage/Kategori/hobi-koleksi.webp",
      name: "Hobi & Koleksi",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
    {
      image: "/assets/Homepage/Kategori/pakaian-pria.webp",
      name: "Elektronik",
    },
  ];
  return (
    <>
      <div className="w-full p-10">
        <div className="w-full bg-white">
          <h2 className="font-semibold text-xl text-slate-500 p-5">KATEGORI</h2>
          <div className="grid grid-cols-10">
            {KategoriList.map((value, index) => {
              return (
                <div key={index} className="border-2 solid border-slate-100">
                  <div className="w-24 h-24 mx-auto mt-5">
                    <img src={value.image} alt="" />
                  </div>
                  <div className="text-center p-2 font-medium text-lg">
                    {value.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Kategori;
