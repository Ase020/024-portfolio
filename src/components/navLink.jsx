"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ title, url }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`rounded p-1 ${pathname === url && "bg-black text-white"}`}
      href={url}
    >
      {title}
    </Link>
  );
};

export default NavLink;
