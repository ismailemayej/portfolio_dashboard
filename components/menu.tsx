"use client";
import { LucideGavel, Notebook, Projector } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
type TItem = {
  name: string;
  icon: React.ReactNode;
  link: string;
};
const DashboardMenu = () => {
  const currentPath = usePathname();
  const menu: TItem[] = [
    { name: "Skills", link: "/", icon: <LucideGavel /> },
    { name: "Projects", link: "/projects", icon: <Projector /> },
    { name: "Blog", link: "/blogs", icon: <Notebook /> },
  ];
  return (
    <div className="h-screen shadow-lg pt-4 transition-all">
      {menu.map((item) => (
        <div key={item.name}>
          <Link
            href={item.link}
            className={`flex items-center  gap-3 p-4 rounded-md hover:bg-slate-200  ${
              currentPath === item?.link && "bg-slate-200"
            }`}
          >
            <span>{item.icon}</span>
            <span>
              <h1>{item.name}</h1>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DashboardMenu;
