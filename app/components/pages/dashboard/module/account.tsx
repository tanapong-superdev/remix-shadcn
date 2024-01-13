"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";
import PagesDashboardModuleForm from "~/components/pages/dashboard/module/form";

const accounts = [
  { id: "1", value: "Alicia Koch", type: "personal" },
  { id: "2", value: "Acme Inc.", type: "team" },
  {
    id: "3",
    value: "Monsters Inc.",
    type: "team",
  },
];

export default function PagesDashboardModuleAccount() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");
  const [openDialog, setOpenDialog] = useState(false);
  const [listAccount, setListAccount] = useState(accounts);
  function onSubmitForm(values: any) {
    console.log(values);
    listAccount.push({
      id: (listAccount.length + 1).toString(),
      value: values.team_name,
      type: "team",
    });
    setListAccount(listAccount);
    setOpenDialog(false);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <div className="flex gap-2 items-center">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              {value
                ? listAccount.find((account) => account.id === value)?.value
                : "Select Account..."}
            </div>
          </div>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <div className="px-3 py-1 text-foreground text-sm font-medium">
            Personal Accounts
          </div>

          <CommandGroup>
            {listAccount
              .filter((account) => account.type === "personal")
              .map((account) => (
                <CommandItem
                  key={"p" + account.id}
                  value={account.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex w-full items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">{account.value}</div>

                    <div>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === account.id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                  </div>
                </CommandItem>
              ))}
            <div className="px-2 mt-2 py-1 text-foreground text-sm font-medium">
              Teams
            </div>

            {listAccount
              .filter((account) => account.type === "team")
              .map((account) => (
                <div key={"t" + account.id}>
                  <CommandItem
                    value={account.id}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    <div className="flex w-full items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">{account.value}</div>
                      <div>
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === account.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </div>
                    </div>
                  </CommandItem>
                </div>
              ))}
            <div className="py-1">
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild className="w-full">
                  <button
                    onClick={() => setOpenDialog(true)}
                    className="relative gap-2 w-full flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    type="button"
                  >
                    <div>
                      <PlusCircle className="w-5 h-5"></PlusCircle>
                    </div>
                    Create Team
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create team</DialogTitle>
                    <DialogDescription>
                      Add a new team to manage products and customers.
                    </DialogDescription>
                  </DialogHeader>
                  <PagesDashboardModuleForm
                    onSubmitForm={onSubmitForm}
                  ></PagesDashboardModuleForm>
                </DialogContent>
              </Dialog>
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
