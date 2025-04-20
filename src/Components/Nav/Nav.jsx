import React, { useRef } from "react";

const Nav = () => {
  const menu=useRef()
  const menuHandler=()=>{
    menu.current.classList.toggle('show-menu')
  }


  return (
    <>
      <div className="h-[80px] flex justify-between items-center px-[12%] py-[0] relative ">
        <div className="flex items-center justify-center">
          <span className="text-2xl text-red-600 font-medium cursor-pointer">
            ICEPARLOR
          </span>
        </div>
        <div className="md:static absolute top-[100%] left-[-100%] md:left-[0%] z-999 gap=[20px] w-full transition-all duration-600 bg-white md:bg-[#ffded1]" ref={menu}>
          <ul className="w-full flex flex-col md:flex-row gap-[15px] justify-center">
            <li className="nav-wrapper">
              <a href="" className="Nav-Link ">
                Home
              </a>
            </li>
            <li className="nav-wrapper">
              <a href="#category" className="Nav-Link">
                Category
              </a>
            </li>
            <li className="nav-wrapper">
              <a href="" className="Nav-Link ">
                Popular
              </a>
            </li>
            <li className="nav-wrapper">
              <a href="" className="Nav-Link ">
                Testimonials
              </a>
            </li>

            <li className="nav-wrapper">
              <a href="" className="Nav-Link ">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[20px] items-center justify-center">
          <button className="btn nav-btn">
            Shop Now <i className="ri-arrow-right-line"></i>
          </button>
          <i className="ri-menu-3-line btn bar " onClick={menuHandler}></i>
        </div>
      </div>
    </>
  );
};

export default Nav;
