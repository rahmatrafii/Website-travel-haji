import React, { useRef, useState } from "react";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const headerRef = useRef();
  window.onscroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add("navFixed");
    } else {
      headerRef.current.classList.remove("navFixed");
    }
  };
  return (
    <header className="fixed z-[99999] w-full bg-slate-500" ref={headerRef}>
      <div className="container px-4 mx-auto ">
        <div className="flex justify-between items-center">
          <div className="px-5">
            <a
              href="#home"
              className=" py-5 text-2xl font-bold  flex items-center"
            >
              <img src="/logo/kakbah.svg" alt="" className="w-[30px] mr-1" />
              Kami
            </a>
          </div>
          <div className="flex items-center ">
            <button
              type="button"
              id="button"
              name="button"
              onClick={() => setHamburgerActive(!hamburgerActive)}
              className={`${
                hamburgerActive ? "hamburger-active" : ""
              } absolute right-6 lg:hidden `}
            >
              <span className="hamburger-line t-hamburger origin-top-left"></span>
              <span className="hamburger-line t-hamburger"></span>
              <span className="hamburger-line t-hamburger origin-bottom-left"></span>
            </button>
            <nav
              className={`${
                hamburgerActive ? "translate-x-0" : "translate-x-full"
              } absolute top-full w-[70%] right-0  h-screen transition duration-300 lg:w-full  lg:block lg:static lg:h-min lg:translate-x-0 lg:shadow-none lg:mr-4 bg-slate-500 lg:bg-transparent`}
            >
              <ul class="block lg:flex text-xl  lg:text-base">
                <li class="group  my-5">
                  <a
                    href="#home"
                    class="mx-4 flex py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300"
                  >
                    Home
                  </a>
                </li>
                <li class="group  my-5">
                  <a class="mx-4 cursor-pointer flex items-center py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300">
                    Paket Haji{" "}
                  </a>
                </li>
                <li class="group  my-5">
                  <a class="mx-4 cursor-pointer flex items-center py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300">
                    Paket Umroh{" "}
                  </a>
                </li>
                <li class="group  my-5">
                  <a
                    href="#contact"
                    class="mx-4 flex py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300"
                  >
                    Kontak
                  </a>
                </li>
                <li class="group  my-5">
                  <a
                    href="#contact"
                    class="mx-4 flex py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300"
                  >
                    Legalitas Perijinan
                  </a>
                </li>
                <li class="group  my-5">
                  <a
                    href="#contact"
                    class="mx-4 flex py-2 text-white group-hover:text-orange-500 whitespace-nowrap transition duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
