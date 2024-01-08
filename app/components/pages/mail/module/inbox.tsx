import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PagesMailModuleInboxCard from "~/components/pages/mail/module/inbox-card";
export default function PagesMailModuleInbox() {
  const [selectedTab, setSelectedTab] = useState();
  function onChangeTab(value: any) {
    alert("222");
    console.log(value);
    // setSelectedTab(value);
  }
  return (
    <div className=" border-l border-r ">
      <Tabs defaultValue="all">
        <div className="">
          <div className="flex   items-center w-full p-3">
            <span className="text-xl flex-1 font-bold">Inbox</span>
            <div>
              <TabsList>
                <TabsTrigger value="all">All Mail</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="border-t h-full">
            <TabsContent className="mt-0" value="all">
              <div className="p-3 ">
                <Input type="text" placeholder="Search" />
              </div>

              <div
                style={{ height: "calc(100vh - 270px)" }}
                className="overflow-y-scroll pb-4  px-3 flex flex-col gap-4  "
              >
                {Array.from({ length: 100 }, (_, index) => (
                  <div key={index}>
                    <PagesMailModuleInboxCard></PagesMailModuleInboxCard>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent className="mt-0" value="unread">
              <div className="p-3 ">
                <Input type="text" placeholder="Search" />
              </div>

              <div
                style={{ height: "calc(100vh - 270px)" }}
                className="overflow-y-scroll pb-4  px-3 flex flex-col gap-4  "
              >
                {Array.from({ length: 100 }, (_, index) => (
                  <div key={index}>
                    <PagesMailModuleInboxCard></PagesMailModuleInboxCard>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
