import PagesMailModuleMenu from "~/components/pages/mail/module/menu";
import PagesMailModuleInbox from "~/components/pages/mail/module/inbox";
import PageMailModuleSelectAccount from "~/components/pages/mail/module/select-account";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
let isHydrating = true;
import { type MenuInbox } from "~/components/pages/mail/module/menu";
import {
  IconInbox,
  IconDocumentOutline,
  IconSend,
  IconTrash,
  IconArchive,
  IconSocialDistancing,
  IconInfoCircle,
  IconBasic_message_multiple,
  IconShoppingCart,
  IconArchiveFill,
} from "~/components/icons/icon";

export default function PagesMail() {
  const { mailId } = useLoaderData<{ mailId: string }>();
  const [mailIdState, setMailIdState] = useState<string>(mailId);
  const [isMobile, setIsMobile] = useState(false);
  const [breakpoint, setBreakpoint] = useState("");
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [collapsedSize, setCollapsedSize] = useState(4.2);
  const [size, setSize] = useState(15);
  const menusMain: MenuInbox[] = [
    {
      icons: IconInbox,
      label: "Inbox",
      bagde: 128,
    },
    {
      icons: IconDocumentOutline,
      label: "Draft",
    },
    {
      icons: IconSend,
      label: "Send",
    },
    {
      icons: IconTrash,
      label: "Junk",
    },
    {
      icons: IconArchive,
      label: "Archive",
    },
  ];
  const menuSecondary: MenuInbox[] = [
    {
      icons: IconSocialDistancing,
      label: "Social",
    },
    {
      icons: IconInfoCircle,
      label: "Update",
    },
    {
      icons: IconBasic_message_multiple,
      label: "Forums",
    },
    {
      icons: IconShoppingCart,
      label: "Shopping",
    },
    {
      icons: IconArchiveFill,
      label: "Promotions",
    },
  ];
  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    if (params.mailId) {
      setMailIdState(params.mailId);
    } else {
      setMailIdState("");
    }
  }, [location]);
  function checkSize() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 767) {
      setIsMobile(true);
      setToggleMenu(true);
    } else if (window.innerWidth < 1024) {
      setIsCollapsed(false);
      setToggleMenu(true);
      setIsMobile(true);
    } else {
      setIsCollapsed(true);
      // setBreakpoint("md");
      setIsMobile(false);
    }
  }
  useEffect(() => {
    if (isHydrated) {
      checkSize();
      const handleResize = () => {
        checkSize();
      };
      window.addEventListener("resize", handleResize);
    }
  }, [isHydrated]);
  function onLayout(size: number[]) {
    if (size[0] === 4.2) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  }
  return (
    <div
      className="border rounded-lg "
      style={{ height: "calc(100vh - 138px)" }}
    >
      {!isMobile ? (
        <ResizablePanelGroup onLayout={onLayout} direction="horizontal">
          <ResizablePanel
            collapsible={isCollapsed}
            defaultSize={size}
            collapsedSize={collapsedSize}
            minSize={size}
            maxSize={size}
          >
            <PageMailModuleSelectAccount
              toggle={toggleMenu}
            ></PageMailModuleSelectAccount>
            <PagesMailModuleMenu
              isActive
              menus={menusMain}
              toggleMenu={toggleMenu}
            ></PagesMailModuleMenu>
            <hr />
            <PagesMailModuleMenu
              menus={menuSecondary}
              toggleMenu={toggleMenu}
            ></PagesMailModuleMenu>
          </ResizablePanel>

          <ResizableHandle withHandle={isCollapsed} />
          <ResizablePanel minSize={25}>
            <PagesMailModuleInbox></PagesMailModuleInbox>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={30}>
            <Outlet></Outlet>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        // <div className="w-full grid mb-6  gap-4 lg:gap-0 lg:space-y-0   grid-cols-12">
        //   <div className="lg:col-span-2 lg:block hidden ">
        //     <PagesMailModuleMenu></PagesMailModuleMenu>
        //   </div>

        //   <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
        //     <PagesMailModuleInbox></PagesMailModuleInbox>
        //   </div>
        //   <div className="lg:col-span-5 md:col-span-6  md:block hidden">
        //     <Outlet></Outlet>
        //   </div>
        // </div>
        <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
          {mailIdState ? (
            <div className="lg:col-span-5 sm:col-span-12 col-span-12  ">
              <Outlet></Outlet>
            </div>
          ) : (
            <div className="lg:col-span-5 md:col-span-12 col-span-12  ">
              <div className="flex">
                <div className="flex  flex-col border-r">
                  <PageMailModuleSelectAccount
                    toggle={toggleMenu}
                  ></PageMailModuleSelectAccount>
                  <PagesMailModuleMenu
                    isActive
                    menus={menusMain}
                    toggleMenu={toggleMenu}
                  ></PagesMailModuleMenu>
                  <hr />
                  <PagesMailModuleMenu
                    menus={menuSecondary}
                    toggleMenu={toggleMenu}
                  ></PagesMailModuleMenu>
                </div>
                <div className="w-full">
                  <PagesMailModuleInbox></PagesMailModuleInbox>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
