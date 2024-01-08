import { Card, CardContent, CardHeader } from "~/components/ui/card";
import "./sidemenu.css";
export default function PagesMusicModuleSidemenu() {
  return (
    <Card>
      <CardHeader className="text-xl px-3 py-3  font-bold">Discover</CardHeader>
      <CardContent className="px-3">
        <div className="flex flex-col">
          <ul className="flex flex-col gap-3">
            <li className="flex cursor font-bold active py-2 px-3   items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Listen Now
            </li>
            <li className="flex px-3 py-1 cursor  items-center">Radio</li>
            <li className="flex px-3 py-1 cursor  items-center">
              New Releases
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
