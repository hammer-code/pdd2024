import { Menu } from "lucide-react";
import Image from "next/image";

type SidebarToggleProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarToggle = ({ setShowSidebar }: SidebarToggleProps) => {
  return (
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
};

export default SidebarToggle;
