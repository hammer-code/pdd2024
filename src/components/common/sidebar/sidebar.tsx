"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SidebarItem from "./sidebar-item";
import SidebarOverlay from "./sidebar-overlay";
import SidebarToggle from "./sidebar-toggle";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav
        className={`md:hidden fixed w-60 min-h-screen bg-primaryBlack-800 border-l border-white/40 p-5 ease-in-out duration-300 z-40 top-0 right-0 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            className="p-1 border border-white/60 rounded-md"
            onClick={() => setShowSidebar(false)}
          >
            <X className="size-5 text-white/60" />
          </button>
        </div>
        <SidebarItem setShowSidebar={setShowSidebar} />
      </nav>
      {showSidebar && <SidebarOverlay setShowSidebar={setShowSidebar} />}
      <SidebarToggle setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Sidebar;
