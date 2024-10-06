"use client"
import { useState, useEffect } from "react";
import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-30 transition-all ${
        isScrolled ? 'bg-primaryBlack-800' : "bg-opacity-0"
      } bg-primaryBlack-800 border-b border-b-primaryBlack-800 duration-300 max-md:hidden`}
    >
      <div className="max-w-6xl mx-auto p-5">
        <nav className="flex items-center justify-between">
          <Image
            src="/assets/logos/ic_pdd24.svg"
            alt="pdd-2024-logo"
            width={42}
            height={42}
            className="md:w-14 md:h-14"
          />

          {/* Lists */}
          <ul className="flex items-center gap-6">
            {navLists.map((nav) => (
              <Link key={nav.id} href={nav.navigate_url}>
                <li>{nav.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
