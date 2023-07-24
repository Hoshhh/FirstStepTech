"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <nav
      style={{ backgroundColor: "#f1f5f9" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-32">
        <span className="text-xl">FirstStepTech</span>
        <div className="flex items-center">
          <ul style={{ color: "#1e293b" }} className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b-2 border-sky-700 hover:text-sky-700">About</li>
            </Link>
            <Link href="/#developer">
              <li className="ml-10 text-sm uppercase hover:border-b-2 border-sky-700 hover:text-sky-700">
                Developers
              </li>
            </Link>
            <Link href="/#developer">
              <li className="ml-10 text-sm uppercase hover:border-b-2 border-sky-700 hover:text-sky-700">
                Recruiters
              </li>
            </Link>
          </ul>
            <button className="hidden md:flex ml-10  p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign In</button>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-100 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" className="mr-2">
                FirstStepTech
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
            </div>
          </div>
          <div className="py-y flex flex-col">
            <ul className="uppercase">
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Developers
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Recruiters
                </li>
              </Link>
            </ul>
            <button className="mt-12 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign In</button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;