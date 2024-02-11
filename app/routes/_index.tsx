import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import PagesDashboard from "~/components/pages/dashboard";
import SharedDateInput from "~/components/shared/date-input";
import { useState, useEffect } from "react";
import PagesDashboardModuleAccount from "~/components/pages/dashboard/module/account";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
let isHydrating = true;
export default function Index() {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isHydrated]);

  const tabs: string[] = ["Overview", "Analytics", "Reports", "Notifications"];
  return (
    <div>
      <a href="https://remix-shadcn-ui-tanapong.vercel.app">Test Link</a>
      <div className="flex">
        <div className="flex-1 ">
          <div className="flex items-center">
            <div className="py-3 flex flex-1 lg:flex-row lg:gap-3 gap-6 flex-col">
              <PagesDashboardModuleAccount></PagesDashboardModuleAccount>
              <nav className="flex items-center space-x-4 lg:space-x-6 mx-6x">
                <a className="text-sm cursor-pointer font-medium transition-colors hover:text-primary">
                  Overview
                </a>
                <a className="text-sm cursor-pointer font-medium text-muted-foreground transition-colors hover:text-primary">
                  Customers
                </a>
                <a className="text-sm cursor-pointer font-medium text-muted-foreground transition-colors hover:text-primary">
                  Products
                </a>
                <a className="text-sm cursor-pointer font-medium text-muted-foreground transition-colors hover:text-primary">
                  Settings
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Input className="w-full" placeholder="Search"></Input>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <div className="text-sm font-medium leading-none">
                        shadcn{" "}
                      </div>
                      <div className="text-xs leading-none text-muted-foreground">
                        m@example.com
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <hr className="my-2" />

          <div className="flex md:flex-row flex-col">
            <span className="text-3xl flex-1 font-bold ">Dashboard </span>
            <div className="mt-3 md:mt-0">
              <SharedDateInput className="date"></SharedDateInput>
            </div>
          </div>
          <Tabs className="mt-3 tabs" defaultValue={tabs[0]}>
            <div
              style={{ width: width < 700 ? `${width - 30}px` : "" }}
              className={width < 700 ? `overflow-y-scroll ` : ""}
            >
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger value={tab} key={tab}>
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {tabs.map((tab) => (
              <TabsContent value={tab} key={tab}>
                <PagesDashboard></PagesDashboard>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
