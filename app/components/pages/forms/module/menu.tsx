import { NavLink, useMatch, Link } from "@remix-run/react";

export default function PagesFormsMenu() {
  const menu = [
    {
      name: "Profile",
      to: "/form",
      match: useMatch("/form"),
    },
    {
      name: "Account",
      to: "/form/account",
      match: useMatch("/form/account"),
    },
    {
      name: "Appearance",
      to: "/form/appearance",
      match: useMatch("/form/appearance"),
    },
    {
      name: "Notifications",
      to: "/form/notifications",
      match: useMatch("/form/notifications"),
    },
    {
      name: "Display",
      to: "/form/display",
      match: useMatch("/form/display"),
    },
  ];
  const inlineClass = `inline-flex cursor-pointer items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-mutedx  justify-start`;
  return (
    <div className="flex gap-2 flex-col">
      {menu.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.to}
            className={
              item.match ? inlineClass + " bg-black text-white" : inlineClass
            }
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
