"use client";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isDropMenu, setDropMenu] = useState(false);

  const toggleDropdown = () => {
    setDropMenu(!isDropMenu);
  };

  return (
    <header className=" absolute left-0 right-0 top-0 z-10 max-w-6xl mx-auto flex justify-between items-center flex-row-reverse p-3">
      <div className=" flex items-center flex-row-reverse md:gap-9">
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            //   loading="lazy"
            alt="logo"
            priority
          />
        </Link>
        <DarkModeSwitch />
      </div>
      <div className=" md:hidden">
        <div>
          <button
            onClick={toggleDropdown}
            className=" relative p-3 border border-slate-800 rounded flex items-center gap-2"
          >
            اختر مرحتلك الدراسيه <IoMdArrowDropdown />
          </button>
          <ul
            className={`absolute bg-slate-100 text-slate-900 transition-all p-6 ${
              isDropMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            <li className=" mb-2 border-b pb-2 border-b-custom-blue">
              <Link href="/prep1" className="">
                الصف الأول الأعدادي
              </Link>
            </li>
            <li className=" mb-2 border-b pb-2 border-b-custom-blue">
              <Link href="/prep2" className="">
                الصف الثاني الأعدادي
              </Link>
            </li>
            <li>
              <Link href="/prep3" className="">
                الصف الثالث الأعدادي
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="hidden md:flex">
        <ul className=" flex items-center gap-10 font-bold mr-5 text-base">
          <li>
            <Link href="/prep1" className="before relative">
              الصف الأول الأعدادي
            </Link>
          </li>
          <li>
            <Link href="/prep2" className="before2 relative">
              الصف الثاني الأعدادي
            </Link>
          </li>
          <li>
            <Link href="/prep3" className=" before3 relative">
              الصف الثالث الأعدادي
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
