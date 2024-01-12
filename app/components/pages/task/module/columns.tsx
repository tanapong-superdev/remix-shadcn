"use client";

import { ColumnDef } from "@tanstack/react-table";
import { type Task } from "~/components/pages/task/data";
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
import { Checkbox } from "~/components/ui/checkbox";
import { DataTableColumnHeader } from "~/components/pages/task/module/column-header";
import PagesTaskModuleDropdownRow from "~/components/pages/task/module/dropdown-row";

export const columns: ColumnDef<Task>[] = [
  {
    id: "checked",
    size: 10,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "task",
    header: "Task",
    enableResizing: true, //disable resizing for just this column
    size: 100,
  },
  {
    accessorKey: "title",
    size: 600,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Title" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            {row.original.tags}
          </div>
          <span>{row.original.title} </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    size: 10,
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      let content = "";
      let IconProgress;
      switch (row.original.status) {
        case "inprogress":
          content = "In Progress";
          IconProgress = Clock10;
          break;
        case "backlog":
          content = "Backlog";
          IconProgress = HelpCircle;
          break;
        case "todo":
          content = "To Do";
          IconProgress = Circle;
          break;
        case "done":
          content = "Done";
          IconProgress = Clock3;
          break;
        case "cancel":
          content = "Cancel";
          IconProgress = XCircle;
          break;
      }
      return (
        <div className="flex items-center gap-2">
          <IconProgress className="h-4 w-4"></IconProgress>
          <span>{content}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    size: 10,
    cell: ({ row }) => {
      let content = "";
      let IconPriority;
      switch (row.original.priority) {
        case "low":
          content = "Low";
          IconPriority = MoveDown;
          break;
        case "medium":
          content = "Medium";
          IconPriority = MoveRight;
          break;
        case "high":
          content = "High";
          IconPriority = MoveUp;
          break;
      }
      return (
        <div className="flex items-center gap-2">
          <IconPriority className="h-4 w-4"></IconPriority>
          <span>{content}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    size: 0,
    cell: ({ row }) => {
      return (
        <div>
          <PagesTaskModuleDropdownRow></PagesTaskModuleDropdownRow>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];
