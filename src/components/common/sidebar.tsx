"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLists } from "@/constants";
import Image from "next/image";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const MenuItem = () => (
    <ul className="flex flex-col gap-6 px-2 mt-4">
      {navLists.map((nav) => (
        <Link
          key={nav.id}
          href={nav.navigate_url}
          onClick={() => setShowSidebar(false)}
        >
          <li className="text-white/60 hover:text-white">{nav.name}</li>
        </Link>
      ))}
    </ul>
  );

  const MenuOverlay = () => (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex md:hidden bg-black/40"
      onClick={() => {
        setShowSidebar(false);
      }}
    />
  );

  const MenuBarMobile = () => (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-between p-5 md:hidden">
      <Image
        src="/assets/logos/ic_pdd24.svg"
        alt="pdd-2024-logo"
        width={36}
        height={36}
      />
      <button
        className="px-2 py-1 border rounded-md"
        onClick={() => setShowSidebar(true)}
      >
        <Menu className="size-5" />
      </button>
    </div>
  );

  return (
    <>
      <nav
        className={`md:hidden fixed w-60 min-h-screen bg-black border-l p-5 ease-in-out duration-300 z-40 top-0 right-0 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            className="p-1 border rounded-md"
            onClick={() => setShowSidebar(false)}
          >
            <X className="size-5" />
          </button>
        </div>
        <MenuItem />
      </nav>
      {showSidebar && <MenuOverlay />}
      <MenuBarMobile />
    </>
  );
};

export default Sidebar;
