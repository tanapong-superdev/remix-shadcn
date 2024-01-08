import PagesMusicModuleMenu from "./module/menu";
import PagesMusicModuleListenNow from "./module/listen-now";
import PagesMusicModulesMadeYou from "./module/made-you";
import PagesMusicModuleSidemenu from "./module/sidemenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
export type Tabs = {
  name: string;
  disabled?: boolean;
};
export default function PagesMusic() {
  const tabs: Tabs[] = [
    {
      name: "Music",
    },
    {
      name: "Podcasts",
    },
    {
      name: "Live",
      disabled: true,
    },
  ];
  return (
    <div className="h-full">
      <PagesMusicModuleMenu></PagesMusicModuleMenu>
      <div className="mt-3  w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
        <div className="col-span-2 hidden lg:block">
          <PagesMusicModuleSidemenu></PagesMusicModuleSidemenu>
        </div>
        <div className="col-span-12 lg:col-span-10 ">
          <Tabs className="tabs " defaultValue={tabs[0].name}>
            <div>
              <TabsList>
                {tabs.map((tab) => (
                  <TabsTrigger
                    disabled={tab.disabled}
                    value={tab.name}
                    key={tab.name}
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value="Music" key="Music">
              <PagesMusicModuleListenNow></PagesMusicModuleListenNow>
              <div className="mt-3">
                <PagesMusicModulesMadeYou></PagesMusicModulesMadeYou>
              </div>
            </TabsContent>
            <TabsContent value="Podcasts" key="Podcasts" className="h-[450px]">
              <div className="text-2xl font-bold">New Episodes</div>
              <span className="font-light">
                Your favorite podcasts. Updated daily.
              </span>
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-xl">No episodes added</span>
                <span className="text-slate-400">
                  You have not added any podcasts. Add one below.
                </span>

                <Button className="mt-3">Add Podcast</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
