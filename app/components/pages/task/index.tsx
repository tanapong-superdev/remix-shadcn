import PagesTaskModuleTable from "~/components/pages/task/module/table";

import { Task, columns } from "./module/columns";
function getData(): Task[] {
  // Fetch data from your API here.
  return [
    {
      checked: false,
      task: "TASK-7878",
      title:
        "Create a new design for the landing page Create a new design for the landing page",
      status: "inprogress",
      priority: "low",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "backlog",
      priority: "medium",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "todo",
      priority: "high",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "done",
      priority: "low",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "inprogress",
      priority: "low",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "backlog",
      priority: "medium",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "todo",
      priority: "high",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "done",
      priority: "low",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "inprogress",
      priority: "low",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "backlog",
      priority: "medium",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "todo",
      priority: "high",
    },
    {
      checked: false,
      task: "TASK-7878",
      title: "Create a new design for the landing page",
      status: "done",
      priority: "low",
    },
  ];
}
export default function PagesTask() {
  const data: Task[] = getData();
  return (
    <div className="container mx-auto py-10">
      <PagesTaskModuleTable columns={columns} data={data} />
    </div>
  );
}
