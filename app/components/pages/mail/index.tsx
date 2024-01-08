import PagesMailModuleMenu from "~/components/pages/mail/module/menu";
import PagesMailModuleInbox from "~/components/pages/mail/module/inbox";
export default function PagesMail() {
  return (
    <div
      className="border rounded-lg"
      style={{ height: "calc(100vh - 138px)" }}
    >
      <div className="w-full grid mb-6  gap-4 lg:gap-2 lg:space-y-0   grid-cols-12">
        <div className="lg:col-span-2 lg:block hidden ">
          <PagesMailModuleMenu></PagesMailModuleMenu>
        </div>
        <div className="lg:col-span-5 md:col-span-6 col-span-12  ">
          <PagesMailModuleInbox></PagesMailModuleInbox>
        </div>
        <div className="lg:col-span-5 md:col-span-6 md:block hidden">
          123123
        </div>
      </div>
    </div>
  );
}
