import React from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import styles from '../style.js';




export default function Navbar() {

  function openMobileNav() {

    const openClose = document.getElementById("menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeNavs = document.querySelectorAll(".closeNav")

    if (openClose.getAttribute("src") === menu) {
      openClose.setAttribute("src", close);
      mobileNav.style.visibility = 'visible';
      mobileNav.style.transform = 'translateY(0px)';
    } else {
      openClose.setAttribute("src", menu);
      mobileNav.style.visibility = 'hidden';
      mobileNav.style.transform = 'translateY(56px)';
    }

    closeNavs.forEach(closeNav => {
      closeNav.addEventListener("click", function () {
        if (mobileNav.style.visibility === 'visible') {
          mobileNav.style.visibility = 'hidden';
          openClose.setAttribute("src", menu);
        } else {
          mobileNav.style.visibility = 'hidden';
          openClose.setAttribute("src", menu);
        }
      })
    });



  }

  return (
    <>
      <div className={`${styles.boxWidth}`}>
        <nav className={`${styles.paddingX} flex w-full h-[70px] bg-primary py-3.5`}>
          <img src={logo} alt="Hoobank Logo" className="w-[124px] h-[32px] mt-1" />
          <ul className="hidden md:mt-0.5 md:flex md:justify-end md:items-center md:flex-1">
            <li className="position-relative list-none font-poppins">
              <a href="#home" className="text-white opacity-80 px-5 transition ease-in-out duration-500 hover:opacity-100 hover:bg-discount-gradient py-1.5 rounded-md">Home</a>
            </li>
            <li className="position-relative list-none font-poppins">
              <a href="#features" className="text-white opacity-80 px-5 transition ease-in-out duration-500 hover:opacity-100 hover:bg-discount-gradient py-1.5 rounded-md">Features</a>
            </li>
            <li className="position-relative list-none font-poppins">
              <a href="#products" className="text-white opacity-80 px-5 transition ease-in-out duration-500 hover:opacity-100 hover:bg-discount-gradient py-1.5 rounded-md">Products</a>
            </li>
            <li className="position-relative list-none font-poppins">
              <a href="#clients" className="text-white opacity-80 px-5 transition ease-in-out duration-500 hover:opacity-100 hover:bg-discount-gradient py-1.5 rounded-md">Clients</a>
            </li>
          </ul>
          <div className="md:hidden flex flex-1 justify-end items-center">
            <img src={menu} alt="Menu Icon" className="w-[28px] h-[28px] object-contain cursor-pointer" id="menu" onClick={openMobileNav} />
            <div className="invisible flex p-6 bg-black-gradient absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] rounded-xl transition duration-500 ease-in-out translate-y-14" id="mobile-nav">
              <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-4">
                <li className="text-white font-poppins closeNav">
                  <a href="#home">Home</a>
                </li>
                <li className="text-white font-poppins closeNav">
                  <a href="#features">Features</a>
                </li>
                <li className="text-white font-poppins closeNav">
                  <a href="#products">Products</a>
                </li>
                <li className="text-white font-poppins closeNav">
                  <a href="#clients">Clients</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}


