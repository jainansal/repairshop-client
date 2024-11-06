"use client";

import { useModal } from "@/hooks/useModalStore";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import axiosInstance from "@/lib/axios";
import { useUser } from "@/hooks/useUser";
import { GetNewItemDto } from "@/lib/dto";
import { toast } from "@/hooks/use-toast";
import { REQUEST_LABELS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { UserType } from "@/lib/enums";

const formSchema = z.object({
  newItemId: z.number({ required_error: "Select an item" }),
  description: z.string().min(1, "Description cannot be empty"),
  serviceCharge: z.string().transform((val) => parseFloat(val)),
  label: z.string().min(1, "Label cannot be empty"),
});

const NewItemRequestModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const { user } = useUser();
  const [items, setItems] = useState<GetNewItemDto[]>();

  const isModalOpen = isOpen && type === "newItemRequest";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newItemId: 0,
      description: "",
      serviceCharge: 0,
      label: REQUEST_LABELS[0],
    },
  });

  useEffect(() => {
    async function fetchNewItems() {
      try {
        const response = await axiosInstance.get(`/${user?.type}/newitems`);
        setItems(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured while fetching new items",
        });
        console.log(error);
      }
    }
    if (user?.id && user.type == UserType.REPAIR && isModalOpen)
      fetchNewItems();
  }, [user]);

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axiosInstance.post(
        `/${user?.type}/service/${data.serviceId}/request`,
        values
      );
      setItems(response.data);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Some error occured while fetching new items",
      });
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-0 max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl font-bold text-blue-600">
            Request New Item
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 overflow-hidden flex flex-col"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="space-y-4 px-6 h-full overflow-auto">
              <FormField
                control={form.control}
                name="newItemId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      New Item
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value && items
                              ? items?.find((item) => item.id === field.value)
                                  ?.title
                              : "Select item"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search item..." />
                          <CommandList>
                            <CommandEmpty>No item found.</CommandEmpty>
                            <CommandGroup>
                              {items?.map((item) => (
                                <CommandItem
                                  value={item.title}
                                  key={item.id}
                                  onSelect={() => {
                                    form.setValue("newItemId", item.id);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      item.id === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {item.title}
                                  <span className="text-xs opacity-20">
                                    {item.productCode}
                                  </span>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceCharge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Service Charges
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2 ">
                        <div className="text-xl opacity-50">Rs.</div>
                        <Input
                          type="number"
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="500"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Label
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select label" />
                        </SelectTrigger>
                        <SelectContent>
                          {REQUEST_LABELS.map((label) => (
                            <SelectItem value={label} key={label}>
                              {label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading} variant={"primary"}>
                Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewItemRequestModal;
