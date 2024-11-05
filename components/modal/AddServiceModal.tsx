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
import { toast } from "@/hooks/use-toast";
import axiosInstance from "@/lib/axios";
import { PostServiceDto } from "@/lib/dto";

const formSchema = z.object({
  customer: z.number({ required_error: "Select a customer" }),
  productCode: z.string().min(1, "Product code is required"),
  productName: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  charges: z.string().transform((val) => parseFloat(val)),
  repairPerson: z.number({ required_error: "Select a repair person" }),
});

const AddServiceModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const [showDefectiveItemModal, setShowDefectiveItemModal] = useState(false);
  const [defectiveItemId, setDefectiveItemId] = useState("");
  const [customers, setCustomers] = useState<
    { label: string; value: number; description: string }[]
  >([]);
  const [repairPersons, setRepairPersons] = useState<
    { label: string; value: number; description: string }[]
  >([]);

  const isModalOpen = isOpen && type === "addService";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer: 0,
      repairPerson: 0,
      charges: 0,
      productCode: "",
      productName: "",
      category: "",
      description: "",
    },
  });

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await axiosInstance.get(
          "/clerk/customers?limit=100000"
        );
        const { content } = response.data;
        setCustomers(
          content.map((customer: any) => ({
            label: customer.name,
            value: customer.id,
            description: customer.email,
          }))
        );
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured while fetching customers",
        });
        console.log(error);
      }
    }
    async function fetchRepairPersons() {
      try {
        const response = await axiosInstance.get(
          "/clerk/repairpersons?limit=100000"
        );
        const { content } = response.data;
        setRepairPersons(
          content.map((repair: any) => ({
            label: repair.name,
            value: repair.id,
            description: repair.email,
          }))
        );
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured while fetching repair persons",
        });
        console.log(error);
      }
    }
    if (isModalOpen) {
      Promise.all([fetchCustomers(), fetchRepairPersons()]);
    }
  }, [isModalOpen]);

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const responseBody: PostServiceDto = {
        baseCharge: values.charges,
        description: values.description,
        custId: values.customer,
        repairId: values.repairPerson,
        productCategory: values.category,
        productCode: values.productCode,
        productTitle: values.productName,
      };
      const response = await axiosInstance.post("/clerk/service", responseBody);
      toast({
        description: "Service created successfully",
      });
      onClose();
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Some error occured",
      });
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
            Add Service
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
                name="customer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Customer
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
                            {field.value
                              ? customers.find(
                                  (customer) => customer.value === field.value
                                )?.label
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
                                  <span className="text-xs opacity-20">
                                    {customer.description}
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
                name="productCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Product Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter product code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Product Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Product Category
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter category"
                        {...field}
                      />
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
              <FormField
                control={form.control}
                name="charges"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Base Charges
                    </FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2 ">
                        <div className="text-xl opacity-50">Rs.</div>
                        <Input
                          type="number"
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="1000"
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
                name="repairPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Repair Person
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
                            {field.value
                              ? repairPersons.find(
                                  (repairPerson) =>
                                    repairPerson.value === field.value
                                )?.label
                              : "Select repair person"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0">
                        <Command>
                          <CommandInput placeholder="Search repair person..." />
                          <CommandList>
                            <CommandEmpty>No repair person found.</CommandEmpty>
                            <CommandGroup>
                              {repairPersons.map((repairPerson) => (
                                <CommandItem
                                  value={repairPerson.label}
                                  key={repairPerson.value}
                                  onSelect={() => {
                                    form.setValue(
                                      "repairPerson",
                                      repairPerson.value
                                    );
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      repairPerson.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {repairPerson.label}
                                  <span className="text-xs opacity-20">
                                    {repairPerson.description}
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
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button disabled={isLoading} variant={"primary"} type="submit">
                Add
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceModal;
