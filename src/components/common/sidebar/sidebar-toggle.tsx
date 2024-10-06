"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

type SidebarToggleProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarToggle = ({ setShowSidebar }: SidebarToggleProps) => {
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
      className={`fixed top-0 left-0 right-0 z-20 flex justify-between p-5 bg-primaryBlack-800 bg-opacity-0 ${
        isScrolled && "bg-opacity-100"
      } border-b border-b-primaryBlack-800 transition-colors duration-300 md:hidden`}
    >
      <Image
        src="/assets/logos/ic_pdd24.svg"
        alt="pdd-2024-logo"
        width={36}
        height={36}
      />
      <button
        className="px-2 py-1 border border-white/60 rounded-md"
        onClick={() => setShowSidebar(true)}
      >
        <Menu className="size-5 text-white/60" />
      </button>
    </div>
  );
};

export default SidebarToggle;
