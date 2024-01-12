"use client";

import { Checkbox } from "~/components/ui/checkbox";
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
import { useEffect, useState } from "react";
export type Filter = {
  icon?: any;
  label?: string;
  value?: string;
  bagde?: number;
};
export type FilterTaskProps = {
  title?: string;
  placeholder?: string;
  listFilter?: Filter[];
  hasClearFilter?: boolean;
  onFilterChange?: (filter: Filter[]) => void;
};
export function PagesTaskModuleFilterTask({
  listFilter,
  placeholder,
  title,
  hasClearFilter,
  onFilterChange,
}: FilterTaskProps) {
  hasClearFilter = hasClearFilter || false;
  title = title || "Title";
  listFilter = listFilter || [];
  placeholder = placeholder || "Placeholder";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const newFilterList = listFilter.map((filter) => {
    return {
      ...filter,
      checked: false,
    };
  });
  const [listSelectFilter, setListSelectFilter] = useState(newFilterList);
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(listSelectFilter.filter((filter) => filter.checked));
    }
  }, [listSelectFilter]);
  function clearFilter() {
    setListSelectFilter(
      listSelectFilter.map((filter) => {
        return {
          ...filter,
          checked: false,
        };
      })
    );
  }
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex gap-2 items-center">
          <PopoverTrigger asChild>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-8 border-dashed"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r6:"
              data-state="closed"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
              >
                <path
                  d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>

              <div className="flex gap-2 items-center">
                <span> {title} </span>
                {listSelectFilter.filter((filter) => filter.checked).length <
                3 ? (
                  listSelectFilter
                    .filter((filter) => filter.checked)
                    .map((filter, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center border py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm px-1 font-normal"
                      >
                        {filter.label}
                      </div>
                    ))
                ) : (
                  <div className="inline-flex items-center border py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm px-1 font-normal">
                    {listSelectFilter.filter((filter) => filter.checked).length}
                    <span className="ml-1">selected</span>
                  </div>
                )}
              </div>
            </button>
          </PopoverTrigger>
          {listSelectFilter.filter((filter) => filter.checked).length > 0 &&
          hasClearFilter ? (
            <button
              onClick={clearFilter}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 px-2 lg:px-3"
            >
              Reset
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>

        <PopoverContent align="start" className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {listSelectFilter.map((filter) => (
                <CommandItem
                  key={filter.value}
                  value={filter.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                  }}
                >
                  <div className="flex gap-3  w-full">
                    <Checkbox
                      checked={filter.checked}
                      onCheckedChange={() => {
                        filter.checked = !filter.checked;
                        setListSelectFilter([...listSelectFilter]);
                      }}
                    ></Checkbox>
                    <div className="w-[20px]">
                      {filter.icon ? <filter.icon className="h-4 w-4" /> : ""}
                    </div>

                    <div className="flex-1 ">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {filter.label}
                      </label>
                    </div>

                    <div>
                      <span className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {filter.bagde}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
              {listSelectFilter.filter((filter) => filter.checked).length > 0 &&
              hasClearFilter ? (
                <div onClick={clearFilter}>
                  <div
                    className="relative border cursor-pointer flex  select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none  aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 justify-center text-center"
                    cmdk-item=""
                    role="option"
                    data-value="clear filters"
                    aria-selected="true"
                    data-selected="true"
                  >
                    Clear filters
                  </div>
                </div>
              ) : (
                ""
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
