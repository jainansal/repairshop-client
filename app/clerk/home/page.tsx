"use client";

import TableSection from "@/components/table/TableSection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/useModalStore";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const { onOpen } = useModal();
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <div className="h-full w-full p-4 gap-4 flex flex-col overflow-hidden">
      <div className="flex gap-4">
        <Input placeholder="Search..." ref={searchInputRef} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'primary'}>Add</Button>
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
      </div>
      <TableSection />
    </div>
  );
};

export default HomePage;
