import PagesMusicModuleMenu from "./module/menu";
import PagesMusicModuleListenNow from "./module/listen-now";
import PagesMusicModulesMadeYou from "./module/made-you";
import PagesMusicModuleSidemenu from "./module/sidemenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";
import type { SideMenu } from "~/components/pages/music/module/sidemenu";
import {
  PlayCircle,
  Grid2X2,
  Radio,
  ListMusic,
  Music4,
  User,
  Mic2,
  LibraryBig,
} from "lucide-react";
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
  const sidemenu: SideMenu[] = [
    {
      title: "Dicovery",
      menu: [
        {
          lable: "Listen Now",
          active: true,
          icon: PlayCircle,
        },
        {
          lable: "Browse",
          icon: Grid2X2,
        },
        {
          lable: "Radio",
          icon: Radio,
        },
      ],
    },
    {
      title: "Library",
      menu: [
        {
          lable: "Playlists",
          icon: ListMusic,
        },
        {
          lable: "Songs",
          icon: Music4,
        },
        {
          lable: "Made for you",
          icon: User,
        },
        {
          lable: "Artists",
          icon: Mic2,
        },
        {
          lable: "Albums",
          icon: LibraryBig,
        },
      ],
    },
    {
      title: "Playlists",
      menu: [
        {
          lable: "Recently Added",
          icon: ListMusic,
        },
        {
          lable: "Recently Played",
          icon: ListMusic,
        },
        {
          lable: "Top Songs",
          icon: ListMusic,
        },
        {
          lable: "Top Albums",
          icon: ListMusic,
        },
        {
          lable: "Top Artists",
          icon: ListMusic,
        },
        {
          lable: "Logic Dicography",
          icon: ListMusic,
        },
        {
          lable: "Badtime Beats",
          icon: ListMusic,
        },
      ],
    },
  ];
  return (
    <div className="h-full">
      <PagesMusicModuleMenu></PagesMusicModuleMenu>
      <div className="mt-3  w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
        <div className="col-span-2 hidden lg:block">
          <PagesMusicModuleSidemenu menu={sidemenu}></PagesMusicModuleSidemenu>
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
