import type { MetaFunction } from "@remix-run/node";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import PagesDashboard from "~/components/pages/dashboard";
import SharedDateInput from "~/components/shared/date-input";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
let isHydrating = true;
export default function Index() {
  // get width of the screen
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
      <div className="flex   ">
        <div className="flex-1 ">
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
