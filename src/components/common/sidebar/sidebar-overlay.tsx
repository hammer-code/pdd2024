type SidebarOverlayProps = {
  setShowSidebar: (show: boolean) => void;
};

const SidebarOverlay = ({ setShowSidebar }: SidebarOverlayProps) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex md:hidden bg-black/40"
      onClick={() => {
        setShowSidebar(false);
      }}
    />
  );
};

export default SidebarOverlay;
