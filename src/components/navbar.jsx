"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { NavLink } from ".";
import {
  bottomVariants,
  centerVariants,
  listItemVariant,
  listVariants,
  topVariants,
} from "./navVariants";

const menuList = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/about", title: "About" },
  { id: 3, url: "/portfolio", title: "Portfolio" },
  { id: 4, url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-full text-xl flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* navlinks */}
      <div className="hidden md:flex gap-4 items-center w-1/3">
        {menuList.map(({ id, url, title }) => (
          <NavLink key={id} title={title} url={url} />
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
      <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
        <a
          href="https://github.com/Ase020"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="github" width={28} height={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/felix-olali"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="linkedin" width={28} height={28} />
        </a>
      </div>

      <div className="md:hidden">
        <button
          className="flex flex-col justify-between h-8"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={navOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={navOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={navOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {navOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute z-10 top-16 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {menuList.map(({ id, url, title }) => (
              <motion.div variants={listItemVariant} key={id}>
                <Link href={url}>{title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
