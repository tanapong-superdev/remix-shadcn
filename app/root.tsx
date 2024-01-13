import { cssBundleHref } from "@remix-run/css-bundle";
import LayoutHeader from "~/components/layouts/header";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useNavigation,
} from "@remix-run/react";
import styles from "./tailwind.css";
import "./main.css";
import type { Menu } from "~/components/layouts/header";
import { Toaster } from "~/components/ui/toaster";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ title: "MyApp" });
}
export default function App() {
  const navigation = useNavigation();
  const title = "MyApp";
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

        {navigation.state === "loading" ? (
          <div className="loading-bar">
            <div className="loading-bar-progress"></div>
          </div>
        ) : (
          ""
        )}
        <div className="container h-full  mx-auto px-3 sm:px-6 lg:px-3">
          <div className="mt-6 h-full">
            <Outlet />
          </div>
        </div>
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
