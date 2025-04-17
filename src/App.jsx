import "./App.css";
import logo_light from "./assets/logo-light.svg";
import Sun_fill from "./assets/Sun_fill.svg";
import Moon_fill from "./assets/Moon_fill.svg";
import Moon_fill_light from "./assets/Moon_fill_light.svg";
import Homepagepic from "./assets/homepagepic.png";
import Done from "./assets/Done_ring_round_fill.svg";
import logo_dark from "./assets/logo-dark.svg";
import Sun_dark from "./assets/sun_dark.svg";
import hamburger from "./assets/hamburger-button.svg";
import close_button from "./assets/close-button.svg";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const baseNavItem =
    "hover:text-[#2A4DD0] hover:underline underline-offset-8 decoration-2 cursor-pointer";
  return (
    <div
      className={`flex flex-col min-h-screen font-sora ${
        darkMode ? "bg-[#111729] text-white" : "bg-white"
      }`}
    >
      <div className=" flex flex-1/20  justify-between sm:justify-around gap-2">
        <img
          className=" w-1/4 sm:w-1/9"
          src={darkMode ? logo_dark : logo_light}
          alt=""
        />
        <button className="sm:hidden">
          <img onClick={toggleMenuOpen} className=" " src={hamburger} alt="" />
        </button>

        <ul
          className={` hidden sm:flex flex-row gap-8 justify-center items-center font-bold `}
        >
          <li
            className={
              "hover:text-[#2A4DD0] hover:underline cursor-pointer underline underline-offset-8 decoration-2"
            }
          >
            About us
          </li>
          <li className={baseNavItem}>Product</li>
          <li className={baseNavItem}>Resource</li>
          <li className={baseNavItem}>Contact</li>
        </ul>

        <button
          onClick={toggleTheme}
          className=" hidden  sm:flex bg-[#222b44] sm:my-7  gap-2 rounded-full  justify-center items-center cursor-pointer"
        >
          <img
            className={`${darkMode ? "bg-white m-1 rounded-full" : ""}`}
            src={darkMode ? Moon_fill : Moon_fill_light}
            alt=""
          />
          <img
            className={`${darkMode ? "mr-1" : "bg-white m-1 rounded-full"}`}
            src={darkMode ? Sun_dark : Sun_fill}
            alt=""
          />
        </button>

        {isMenuOpen && (
          <div className="sm:hidden fixed top-0 right-0 w-64 h-screen bg-white shadow-lg z-50 p-6 flex flex-col justify-center items-center gap-6 transition-all duration-300">
            <button
              className="self-end text-xl font-bold mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={close_button} alt="" />
            </button>

            {/* Menu Items */}
            <ul className="flex flex-col gap-4 font-bold text-[#223344]">
              <li className="hover:text-[#2A4DD0] cursor-pointer">About us</li>
              <li className={baseNavItem}>Product</li>
              <li className={baseNavItem}>Resource</li>
              <li className={baseNavItem}>Contact</li>
            </ul>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="mt-auto bg-[#222b44] px-4 py-2 rounded-full flex gap-2 justify-center items-center text-white"
            >
              <img
                className={`${darkMode ? "bg-white m-1 rounded-full" : ""}`}
                src={darkMode ? Moon_fill : Moon_fill_light}
                alt="moon"
              />
              <img
                className={`${darkMode ? "mr-1" : "bg-white m-1 rounded-full"}`}
                src={darkMode ? Sun_dark : Sun_fill}
                alt="sun"
              />
            </button>
          </div>
        )}
      </div>

      <div className="flex-11/13  flex flex-col-reverse sm:flex-row  ">
        <div
          className={`flex-1 flex flex-col gap-2 justify-center  pl-5 sm:pl-20 transition-colors duration-300 
          `}
        >
          <h3 className="font-bold uppercase text-sm sm:text-base">
            {" "}
            😎 Simple way to communicate
          </h3>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[60px] w-100 leading-tight">
            Actions for Accessibility in Desing
          </h1>

          <p className="text-[18px]  w-[80%] pb-5">
            The fastest way to build and deploy websites with resusable
            components.
          </p>
          <div className="flex gap-2  w-[80%]">
            <button className="p-3 flex-1 rounded-xl text-[16px] font-bold bg-[#2e459a] text-white cursor-pointer">
              GET STARTED
            </button>
            <button
              className={`p-3 flex-1/2 font-bold text-[16px] underline underline-offset-4 decoration-2 text-left ${
                darkMode ? " text-white" : "text-[#2e459a]"
              } cursor-pointer`}
            >
              Get live demo
            </button>
          </div>
          <ul className="flex mb-10 mt-3  gap-2 sm:mt-10">
            <li className="flex gap-2 text-[16px]">
              <img src={Done} alt="" />
              No credit card required
            </li>
            <li className="flex gap-2 text-[16px]">
              <img src={Done} alt="" />
              No software to install
            </li>
          </ul>
        </div>

        <div className="  flex  justify-center items-center flex-1">
          <img className=" w-100 sm:w-155 h-auto" src={Homepagepic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
