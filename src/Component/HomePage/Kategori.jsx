import React from "react";

const Kategori = () => {
  const KategoriList = [
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
    {
      image: "/assets/project2.png",
    },
  ];
  return (
    <>
      <div className="w-full bg-white p-5">
        <h2 className="font-semibold text-xl text-slate-500">KATEGORI</h2>
        <div className="grid gap-5 grid-cols-10 m-10">
          {KategoriList.map((value, index) => {
            return <img width={120} src={value.image} alt="" key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Kategori;
