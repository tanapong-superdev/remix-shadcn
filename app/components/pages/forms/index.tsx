import { Outlet } from "@remix-run/react";
import PagesFormsMenu from "~/components/pages/forms/module/menu";
export default function PagesForms() {
  return (
    <div>
      <div className="w-full grid  lg:gap-6    grid-cols-12 ">
        <div className="col-span-3 px-3">
          <PagesFormsMenu></PagesFormsMenu>
        </div>
        <div className="lg:col-span-6 col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
