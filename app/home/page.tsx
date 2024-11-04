"use client";

import AddCustomerServiceDropdown from "@/components/AddCustomerServiceDropdown";
import TableSection from "@/components/table/TableSection";
import { Input } from "@/components/ui/input";
import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import { UserType } from "@/lib/enums";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const { user } = useUser();
  const { onOpen } = useModal();
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const inputKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      setSearch(searchInputRef?.current?.value || "");
    }
  };
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
        {user?.type == UserType.CLERK ? <AddCustomerServiceDropdown /> : ""}
      </div>
      <TableSection search={search} />
    </div>
  );
};

export default HomePage;
