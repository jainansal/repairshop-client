"use client";

import TableSection from "@/components/table/TableSection";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/useModalStore";
import { useEffect, useRef } from "react";

const CustomerHomePage = () => {
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
      </div>
      <TableSection tabs={["Services", "Requests"]} showMineToggle={false} />
    </div>
  );
};

export default CustomerHomePage;
