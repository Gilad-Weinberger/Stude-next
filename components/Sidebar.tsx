import Image from "next/image";
import Link from "next/link";
import { SidebarLinks } from "@/lib/data";

interface SidebarProps {
  active_tab: string;
}

function Sidebar({ active_tab }: SidebarProps) {
  return (
    <div className="sidebar bg-white h-screen fixed p-7 rounded-r-[30px]">
      <Image
        className="h-10"
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={10}
      />
      <div className="menu mt-10 flex flex-col gap-2.5">
        {SidebarLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`menu-item py-3 px-5 w-52 flex items-center justify-start gap-3.5 rounded-[10px] cursor-pointer text-black no-underline ${
              active_tab === link.title.toLowerCase()
                ? "bg-[#434bbf] text-white"
                : ""
            }`}
          >
            <Image
              src={link.icon}
              alt={link.title}
              width={20}
              height={20}
              className={`${
                active_tab === link.title.toLowerCase() ? "filter invert" : ""
              }`}
            />
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
