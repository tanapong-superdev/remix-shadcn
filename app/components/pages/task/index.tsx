import PagesTaskModuleTable from "~/components/pages/task/module/table";
import {
  HelpCircle,
  Circle,
  Clock10,
  Clock3,
  XCircle,
  MoveRight,
  MoveDown,
  MoveUp,
} from "lucide-react";
import { columns } from "./module/columns";
import { type Task } from "~/components/pages/task/data";
import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import DataTableViewOptions from "~/components/pages/task/module/view-option";
import {
  PagesTaskModuleFilterTask,
  type Filter,
} from "~/components/pages/task/module/filter-task";
let filterStatusDefault: Filter[] = [];
let filterPriorityDefault: Filter[] = [];
export default function PagesTask() {
  const { tasks: taskLoader } = useLoaderData<{
    tasks: Task[];
  }>();
  const [tasks, setTasks] = useState<Task[]>(taskLoader);
  const [table, setTable] = useState<any>(null);
  const [filterValue, setFilterValue] = useState("");
  const listFilterStatus: Filter[] = [
    {
      label: "Backlog",
      value: "backlog",
      icon: HelpCircle,
      bagde: tasks.filter((task) => task.status === "backlog").length,
    },
    {
      label: "To Do",
      value: "todo",
      icon: Circle,
      bagde: tasks.filter((task) => task.status === "todo").length,
    },
    {
      label: "In Progress",
      value: "inprogress",
      icon: Clock10,
      bagde: tasks.filter((task) => task.status === "inprogress").length,
    },
    {
      label: "Done",
      value: "done",
      icon: Clock3,
      bagde: tasks.filter((task) => task.status === "done").length,
    },
    {
      label: "Canceled",
      value: "cancel",
      icon: XCircle,
      bagde: tasks.filter((task) => task.status === "cancel").length,
    },
  ];
  const listFilterPriority: Filter[] = [
    {
      label: "Low",
      value: "low",
      icon: MoveDown,
      bagde: tasks.filter((task) => task.priority === "low").length,
    },
    {
      label: "Medium",
      value: "medium",
      icon: MoveRight,
      bagde: tasks.filter((task) => task.priority === "medium").length,
    },
    {
      label: "High",
      value: "high",
      icon: MoveUp,
      bagde: tasks.filter((task) => task.priority === "high").length,
    },
  ];

  function filterMain() {
    let tasks: Task[] = taskLoader;
    if (filterStatusDefault.length !== 0) {
      tasks = tasks.filter((task) => {
        return filterStatusDefault
          .map((filter) => filter.value)
          .some((value) => value === task.status);
      });
    }
    if (filterPriorityDefault.length !== 0) {
      tasks = tasks.filter((task) => {
        return filterPriorityDefault
          .map((filter) => filter.value)
          .some((value) => value === task.priority);
      });
    }

    if (tasks.length === 0) {
      setTasks(taskLoader);
    } else {
      setTasks(tasks);
    }
  }
  function filterStatus(filter: Filter[]) {
    filterStatusDefault = filter;
    filterMain();
  }
  function filterPriority(filter: Filter[]) {
    filterPriorityDefault = filter;
    filterMain();
  }
  function onTableChange(table: any) {
    setTable(null);
    setTimeout(() => {
      setTable(table);
    });
  }

  return (
    <div className="container mx-auto py-10">
      <div className="pb-3">
        <span className="text-2xl font-bold tracking-tight">Welcome back!</span>
        <p className="text-muted-foreground">
          Here's a list of your tasks for this month!
        </p>
      </div>

      {table ? (
        <div className="flex items-center  py-4">
          <div className="flex flex-1 gap-3 items-center">
            <Input
              placeholder="Filter Task..."
              value={filterValue}
              onChange={(event) => (
                setFilterValue(event.target.value),
                table.getColumn("task")?.setFilterValue(event.target.value)
              )}
              className="max-w-sm h-8"
            />
            <PagesTaskModuleFilterTask
              title="Status"
              placeholder="Status"
              listFilter={listFilterStatus}
              onFilterChange={filterStatus}
            ></PagesTaskModuleFilterTask>
            <PagesTaskModuleFilterTask
              title="Priority"
              hasClearFilter
              placeholder="Priority"
              listFilter={listFilterPriority}
              onFilterChange={filterPriority}
            ></PagesTaskModuleFilterTask>
          </div>

          <DataTableViewOptions table={table} />
        </div>
      ) : (
        ""
      )}
      <PagesTaskModuleTable
        columns={columns}
        data={tasks}
        onTableChange={onTableChange}
      />
    </div>
  );
}
