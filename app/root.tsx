import { cssBundleHref } from "@remix-run/css-bundle";
import LayoutHeader from "~/components/layouts/header";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import "./main.css";
import type { Menu } from "~/components/layouts/header";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const title = "TurboXApp";
  const menus: Menu[] = [
    { title: "Dashboard", to: "/" },
    { title: "Music", to: "/music" },
    { title: "Mail", to: "/mail" },
    { title: "Task", to: "/task" },
    { title: "Form", to: "/form" },
  ];
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <LayoutHeader title={title} menus={menus}></LayoutHeader>
        <div className="container h-full  mx-auto px-3 sm:px-6 lg:px-3">
          <div className="mt-6 h-full">
            <Outlet />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
