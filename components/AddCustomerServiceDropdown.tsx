"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useModal } from "@/hooks/useModalStore";

const AddCustomerServiceDropdown = () => {
  const { onOpen } = useModal();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"primary"}>Add</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onOpen("addCustomer")}>
          Customer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onOpen("addService")}>
          Service
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddCustomerServiceDropdown;
