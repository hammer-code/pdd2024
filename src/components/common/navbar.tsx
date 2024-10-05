import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 bg-primaryBlack-900 border-b border-b-primaryBlack-800">
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
