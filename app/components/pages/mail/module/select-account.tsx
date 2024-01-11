import { Button } from "~/components/ui/button";
import { Command, CommandGroup, CommandItem } from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  IconTriangleSharp,
  IconBxlGmail,
  IconCloud,
} from "~/components/icons/icon";
import { cn } from "~/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
export type SelectAccountProps = {
  toggle?: boolean;
};
export default function PageMailModuleSelectAccount({
  toggle,
}: SelectAccountProps) {
  const accounts = [
    {
      name: "Alicia Koch",
      email: "alicia@example.com",
      icon: IconTriangleSharp,
    },
    {
      name: "Alicia Koch Gmail",
      email: "alicia@gmail.com",
      icon: IconBxlGmail,
    },
    { name: "Alicia Koch me", email: "alicia@me.com", icon: IconCloud },
  ];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(accounts[0].email);
  const inlineClass = "px-2  py-3 border-b h-[64px]";
  return (
    <div className="px-2  py-3 border-b h-[64px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={
              toggle ? "w-[40px] justify-betweenx" : "w-full justify-between"
            }
          >
            {value ? (
              <div className="flex item-center gap-2">
                {accounts
                  .find((account) => account.email === value)
                  ?.icon({ width: 20, height: 20 })}
                {!toggle ? (
                  <span>
                    {accounts.find((account) => account.email === value)?.name}
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              "Select Account..."
            )}
            {!toggle ? (
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            ) : (
              ""
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <Command className="w-full">
            <CommandGroup className="w-full">
              {accounts.map((account) => (
                <CommandItem
                  className="w-full"
                  key={account.email}
                  value={account.email}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="w-full  grid   gap-4 lg:gap-2 lg:space-y-0   grid-cols-12 ">
                    <div className="col-span-2">
                      <account.icon width={20} height={20} />
                    </div>
                    <div className="col-span-9 ">{account.email}</div>
                    <div className="col-span-1">
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === account.email ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                  </div>
                  {/* <div className="flex  w-full ">
                    <div>
                      <account.icon width={20} height={20} />
                    </div>

                    <div className="flex-1 pl-3 text-sm">{account.email}</div>
                    <div>
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === account.email ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </div>
                  </div> */}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
