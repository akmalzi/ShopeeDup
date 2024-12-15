const Navbar = () => {
  const RecomendationKeyword = [
    {
      word: "YSL Y EDP",
    },
    {
      word: "Sepeda Roadbike Polygon",
    },
    {
      word: "Gembok Kran PDAM",
    },
    {
      word: "Roadbike Bekas",
    },
    {
      word: "Kaos Polos 20s",
    },
    {
      word: "Helm Roadbike",
    },
    {
      word: "Hotwheels Curah",
    },
  ];

  return (
    <>
      <div className="navbar bg-[#FE5620] flex justify-between w-full pt-20">
        <div className="flex-row px-20">
          <a className=" btn btn-ghost text-white text-xl">daisyUI</a>
        </div>
        <div className="w-full">
          <div className="form-control w-full grid grid-rows-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered bg-white col-span-7"
            />
            {RecomendationKeyword.map((value, index) => {
              return (
                <span
                  key={index}
                  className="text-white my-auto whitespace-nowrap"
                >
                  <a href="#">{value.word}</a>
                </span>
              );
            })}
          </div>
        </div>
        <div className="dropdown dropdown-end px-20">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
