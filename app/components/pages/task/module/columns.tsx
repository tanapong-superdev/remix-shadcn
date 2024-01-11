"use client";

import { ColumnDef } from "@tanstack/react-table";
export type Task = {
  checked: boolean;
  task: string;
  title: string;
  status: "inprogress" | "backlog" | "todo" | "done";
  priority: "low" | "medium" | "high";
};
import { Checkbox } from "~/components/ui/checkbox";
import { ArrowUpDown, ChevronsUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DataTableColumnHeader } from "~/components/pages/task/module/column-header";
import PagesTaskModuleDropdownRow from "~/components/pages/task/module/dropdown-row";

export const columns: ColumnDef<Task>[] = [
  {
    id: "checked",
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
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Title" />;
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.original.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    id: "actions",

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
