"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuList = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="h-full flex items-center border justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* navlinks */}
      <div className="hidden md:flex gap-4 items-center w-1/3">
        {menuList.map(({ url, title }) => (
          <Link key={title} href={url}>
            {title}
          </Link>
        ))}
      </div>

      {/* mobile */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Nyalenda</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* social links */}
      <div className="hidden md:flex items-center gap-4 w-1/3">
        <a
          href="https://github.com/Ase020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="github" width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/felix-olali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </a>
      </div>

      <div className="md:hidden">
        <button
          className="flex flex-col justify-between h-8 border"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
          <div className="w-10 h-1 bg-black rounded" />
        </button>

        {navOpen && (
          <div className="absolute top-24 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {menuList.map(({ url, title }) => (
              <Link key={title} href={url}>
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
