import Link from "next/link";
import { navLists } from "@/constants";

type SidebarItemProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarItem = ({ setShowSidebar }: SidebarItemProps) => {
  return (
    <ul className="flex flex-col gap-6 px-2 mt-4">
      {navLists.map((nav) => (
        <Link key={nav.id} href={nav.navigate_url}>
          <li
            className="text-white/60 hover:text-white"
            onClick={() => setShowSidebar(false)}
          >
            {nav.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarItem;
