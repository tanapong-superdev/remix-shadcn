import PagesMailModuleMenu from "~/components/pages/mail/module/menu";
import PagesMailModuleInbox from "~/components/pages/mail/module/inbox";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
let isHydrating = true;
export default function PagesMail() {
  const { mailId } = useLoaderData<{ mailId: string }>();
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(!isHydrating);
  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  function checkSize() {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  useEffect(() => {
    if (isHydrated) {
      console.log(window.innerWidth);
      checkSize();
      const handleResize = () => {
        checkSize();
      };
      window.addEventListener("resize", handleResize);
    }
  }, [isHydrated]);

  return (
    <div
      className="border rounded-lg"
      style={{ height: "calc(100vh - 138px)" }}
    >
      {!isMobile ? (
        <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
          <div className="lg:col-span-2 lg:block hidden ">
            <PagesMailModuleMenu></PagesMailModuleMenu>
          </div>

          <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
            <PagesMailModuleInbox></PagesMailModuleInbox>
          </div>
          <div className="lg:col-span-5 md:col-span-6 md:block hidden">
            <Outlet></Outlet>
          </div>
        </div>
      ) : (
        <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
          {mailId ? (
            <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
              <Outlet></Outlet>
            </div>
          ) : (
            <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
              <PagesMailModuleInbox></PagesMailModuleInbox>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
