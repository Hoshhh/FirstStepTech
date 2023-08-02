"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"


const Navbar = ({user}: {user:any}) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
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

          { !user ? (
            <button onClick={() => signIn()} className="hidden md:flex ml-10  p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign In</button>
          ) : (
              <div className="relative ml-10 hover:cursor-pointer" onClick={handleProfileClick}>
                <div className="flex flex-col justify-center items-center">
                  <img 
                      src={user?.image} 
                      alt="Profile Picture" 
                      className="w-10 h-10 hidden md:flex rounded-full shadow-md shadow-gray-400 hover:cursor-pointer" 
                  />
                  <div className="hidden md:flex md:flex-row">
                    <p>{user.firstName}</p>
                    <AiFillCaretDown />
                  </div>
                </div>
                { showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow">
                        <ul className="py-2">
                            <li className="px-4 py-2 hover:bg-gray-200">
                                <Link href={`/user/${user?.id}`}>Profile</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200" onClick={() => signOut()}>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                )}
              </div>
            )
          }

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
            {!user ? (
              <button className="mt-12 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign In</button>
            ) : (
              <div className="flex flex-col">
                <Link href={`/user/${user?.id}`} className="mt-12 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 text-center">Profile</Link>
                <button className="mt-4 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign Out</button>
              </div>
            )
            }
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;