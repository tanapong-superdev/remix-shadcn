import { useEffect, useState } from "react";

export type MenuInbox = {
  icons?: any;
  label?: string;
  bagde?: number;
};
export type MenuProps = {
  menus: MenuInbox[];
  toggleMenu?: boolean;
  isActive?: boolean;
};
export default function PagesMailModuleMenu({
  menus,
  toggleMenu,
  isActive,
}: MenuProps) {
  menus = menus || [];
  toggleMenu = toggleMenu || false;
  isActive = isActive || false;
  const inlineClass =
    "inline-flex w-full cursor cursor-pointer items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   h-9 rounded-md px-2 dark:bg-muted dark:hover:bg-muted dark:hover:text-white justify-start";
  return (
    <div className="w-full flex flex-col gap-2 px-2 py-3">
      {menus.map((menu, index) => (
        <a
          key={index}
          className={
            index === 0 && isActive
              ? inlineClass + " bg-primary text-white"
              : inlineClass
          }
        >
          {toggleMenu ? (
            <div>
              <menu.icons width={25} height={25} />
            </div>
          ) : (
            <div className="flex items-center w-full gap-2  ">
              <menu.icons width={25} height={25} />
              <span className="flex-1 text-medium">{menu.label}</span>
              {menu.bagde ? (
                <span className="ml-auto text-background dark:text-white">
                  128
                </span>
              ) : (
                ""
              )}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
