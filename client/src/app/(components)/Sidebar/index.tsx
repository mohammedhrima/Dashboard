"use client"
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/app/state";
import { Menu, LucideIcon, Layout, Archive, Clipboard, User, SlidersHorizontal, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollaped: boolean;
}

function SidebarLink(props: SidebarLinkProps) {
  const { href, icon: Icon, isCollaped, label } = props;

  const pathname = usePathname();
  const isActive = (pathname === href) || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollaped ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? "bg-blue-200 text-white" : ""}`}>
        <Icon className="w-6 h-6 !text-gray-700" />
        <span className={`${isCollaped ? "hidden" : "block"} font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  )
}

function Sidebar({ }: Props) {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
  
  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-6" : "px-8"}`}>
        <div>logo</div>
        <div className={`${isSidebarCollapsed ? "hidden" : "font-extrabold text-2xl"}`}>EDSTOCK</div>
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINK */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollaped={isSidebarCollapsed} />
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollaped={isSidebarCollapsed} />
        <SidebarLink href="/products" icon={Clipboard} label="Products" isCollaped={isSidebarCollapsed} />
        <SidebarLink href="/users" icon={User} label="Users" isCollaped={isSidebarCollapsed} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollaped={isSidebarCollapsed} />
        <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollaped={isSidebarCollapsed} />
      </div>

      {/* FOOTER */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </div>
  );
}

export default Sidebar;
