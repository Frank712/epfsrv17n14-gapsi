"use client";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import Link from "next/link";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 py-2 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`antialiased font-bold`}>e-Commerce</span>
          <span> Gapsi</span>
        </Link>
      </div>

      <div className="hidden sm:block"></div>
    </nav>
  );
};
