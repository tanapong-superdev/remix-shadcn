import "./sidemenu.css";
export type SideMenu = {
  title: string;
  menu: {
    lable: string;
    icon: any;
    active?: boolean;
  }[];
};
export type SideMenuProps = {
  menu: SideMenu[];
};

export default function PagesMusicModuleSidemenu({ menu }: SideMenuProps) {
  menu = menu || [];
  return (
    <div className="flex  flex-col">
      <ul className="flex gap-6 flex-col">
        {menu.map((item) => (
          <div>
            <li className="flex px-3 py-1 cursor mb-2  text-lg font-semibold tracking-tight  items-center">
              {item.title}
            </li>
            <ul className="flex flex-col gap-2">
              {item.menu.map((menu) => (
                <li
                  className={`flex px-3 py-1 cursor flex cursor  py-2 px-3   items-center  items-center ${
                    menu.active ? "active" : ""
                  } `}
                >
                  <span className="mr-2">
                    <menu.icon></menu.icon>
                  </span>
                  {menu.lable}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
