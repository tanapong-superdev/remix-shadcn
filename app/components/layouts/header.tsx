type Props = {
  title?: string;
  description?: string;
  menus?: Menu[];
};
export type Menu = {
  title: string;
  to: string;
};
import { Button } from "~/components/ui/button";
import "./header.css";
import { useState, useEffect } from "react";
import { NavLink } from "@remix-run/react";

let isHydrating = true;
export default function LayoutHeader({ title, description, menus }: Props) {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  title = title || "MyApp";
  description = description || "Remix Starter";
  menus = menus || [];
  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);
  if (isHydrated) {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "0";
    }
  }
  function openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "250px";
    }
  }
  function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
      sidenav.style.width = "0";
    }
  }
  return (
    <header className="bg-white header shadow">
      <div className="max-w-7xlx container mx-auto py-6 px-4 sm:px-6  lg:px-3 flex justify-between">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <nav className="hidden sm:flex gap-5 items-center space-x-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.to}
              to={menu.to}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active flex font-bold  text-amber-700  text-xl  justify-center"
                  : isPending
                  ? "pending"
                  : "text-xl  flex justify-center font-medium text-gray-500 hover:text-gray-900"
              }
            >
              {menu.title}
            </NavLink>
          ))}
        </nav>
        <nav className="sm:hidden">
          <Button onClick={openNav}>Menu</Button>
          <div id="mySidenav" className="sidenav">
            <a onClick={closeNav} className="closebtn">
              &times;
            </a>
            {menus.map((menu) => (
              <a
                key={menu.to}
                href={menu.to}
                className=" font-medium text-gray-500 hover:text-gray-900"
              >
                {menu.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
