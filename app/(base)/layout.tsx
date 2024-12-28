"use client";

// components
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { usePathname } from "next/navigation";
import { Users } from "@/lib/data";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const activeTab = pathname.split("/")[1] || "dashboard";
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const user = Users[0];

  return (
    <div className="flex flex-row h-screen bg-[#f9f9f9]">
      <Sidebar active_tab={activeTab} />
      <div className="flex flex-col flex-grow max-h-screen ml-72 p-10 pl-5 pt-4">
        <Topbar title={activeTab} currentDate={currentDate} user={user} />
        <div className="overflow-y-auto mt-4">
          <h1 className="m-0 text-[40px]">Dashboard</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
