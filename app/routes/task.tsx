import { json } from "@remix-run/node";
import PagesTask from "~/components/pages/task";
import { getTasks } from "~/components/pages/task/data";
export async function loader() {
  const tasks = await getTasks();
  return json({ tasks });
}
export default function Task() {
  return (
    <div>
      <PagesTask />
    </div>
  );
}
