import React from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { FormControl } from "../ui/form";

const Combobox = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[400px] justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? customers.find((customer) => customer.value === field.value)
                  ?.label
              : "Select customer"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search customer..." />
          <CommandList>
            <CommandEmpty>No customer found.</CommandEmpty>
            <CommandGroup>
              {customers.map((customer) => (
                <CommandItem
                  value={customer.label}
                  key={customer.value}
                  onSelect={() => {
                    form.setValue("customer", customer.value);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      customer.value === field.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {customer.label}
                  <span className="text-xs opacity-20">{customer.value}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
