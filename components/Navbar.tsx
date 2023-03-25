import React from 'react';
import Image from 'next/image';
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  const labels: string[] = ['Anime', 'Manga'];
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
            px-4 
            md:px-16
            py-6 
            flex 
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90
            `}
      >
        <img
          className="md:h-16 h-12 md:w-16 w-12"
          src="/images/logo.png"
          alt="logo.png"
        />
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            md:flex
        "
        >
          {labels.map((label) => (
            <NavbarItem label={label} key={label} />
          ))}
        </div>
        <div className="md:hidden flex- flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`w-4 text-white fill-white transition `} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>

          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/logo.png" alt="" />
            </div>
            <BsChevronDown
              className={`w-4 text-white fill-white transition 
              }`}
            />
            {/* <AccountMenu visible={showAccountMenu} /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
