import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "~/components/ui/menubar";
export type Menu = {
  name?: string;
  shortcut?: string;
  separator?: boolean;
  disabled?: boolean;
};
export type MenuMusic = {
  title?: string;
  menu: Menu[];
};
export default function PagesMusicModuleMenu() {
  const menu: MenuMusic[] = [
    {
      title: "Music",
      menu: [
        { name: "About Music", separator: true },
        {
          name: "Preferences...",
          shortcut: "⌘,",
        },
        {
          name: "Hide Music",
          shortcut: "⌘H",
        },
        {
          name: "Hide Others",
          shortcut: "⌥⌘H",
        },
        {
          name: "Quit Music",
          shortcut: "⌘Q",
        },
      ],
    },
    {
      title: "File",
      menu: [
        {
          name: "New",
          shortcut: "⌘N",
        },
        {
          name: "New Playlist",
          shortcut: "⌥⌘N",
        },
        {
          name: "Add to Library...",
          shortcut: "⌘O",
        },
        { name: "Add Folder to Library...", shortcut: "⌥⌘O" },
        { name: "Add to Playlist", shortcut: "⌥⌘O" },
        { name: "Show in Finder", shortcut: "⌥⌘O" },
        { name: "File", separator: true },
        { name: "Library", separator: true, disabled: true },
        { name: "Subscribe to Apple Music...", separator: true },
        { name: "Import Playlist...", shortcut: "⌘I" },
        { name: "Export Playlist...", shortcut: "⇧⌘I" },
        { name: "Export Song...", shortcut: "⌥⌘I" },
        { name: "Export Library...", shortcut: "⌥⇧⌘I" },
      ],
    },
    {
      title: "Edit",
      menu: [
        { name: "Undo", shortcut: "⌘Z" },
        { name: "Redo", shortcut: "⇧⌘Z" },
        { name: "Cut", shortcut: "⌘X" },
        { name: "Copy", shortcut: "⌘C" },
        { name: "Paste", shortcut: "⌘V" },
        { name: "Select All", shortcut: "⌘A" },
        { name: "Delete", shortcut: "⌫" },
        { name: "Find", shortcut: "⌘F" },
        { name: "Find Next", shortcut: "⌘G" },
        { name: "Find Previous", shortcut: "⇧⌘G" },
        { name: "Replace", shortcut: "⌥⌘F" },
        { name: "Show Find Bar", shortcut: "⌥⌘F" },
        { name: "Find in Music", shortcut: "⌥⌘F" },
        { name: "Find in Playlist", shortcut: "⌥⌘F" },
        { name: "Find in Library", shortcut: "" },
      ],
    },
    {
      title: "View",
      menu: [
        { name: "Show Status Bar", shortcut: "⌘/" },
        { name: "Show Artwork", shortcut: "⌘/" },
        { name: "Show Column Browser", shortcut: "⌘/" },
        { name: "Show Visualizer", shortcut: "⌘/" },
        { name: "Show Equalizer", shortcut: "⌘/" },
        { name: "Show Lyrics Viewer" },
      ],
    },
    {
      title: "Account",
      menu: [
        { name: "Sign In", shortcut: "⌘/" },
        { name: "Sign Out", shortcut: "⌘/" },
        { name: "View My Account", shortcut: "⌘/" },
        { name: "View My Profile", shortcut: "⌘/" },
        { name: "View My Apple ID", shortcut: "⌘/" },
        { name: "View My iCloud Music Library", shortcut: "⌘/" },
        { name: "View My Subscriptions", shortcut: "⌘/" },
        { name: "View My Devices", shortcut: "⌘/" },
        { name: "View My Home Videos", shortcut: "⌘/" },
        { name: "View My Wish List", shortcut: "⌘/" },
        { name: "View My Pre-Orders", shortcut: "⌘/" },
      ],
    },
  ];
  return (
    <Menubar>
      {menu.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{item.title}</MenubarTrigger>
          <MenubarContent>
            {item.menu.map((menu, menuIndex) => (
              <div key={menuIndex}>
                <MenubarItem disabled={menu.disabled}>
                  {menu.name} <MenubarShortcut>{menu.shortcut}</MenubarShortcut>
                </MenubarItem>
                {menu.separator ? <MenubarSeparator /> : ""}
              </div>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
