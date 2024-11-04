"use client";

import React, { useEffect, useState } from "react";
import TableHeading from "./TableHeading";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ResultsTable from "./ResultsTable";
import { TABLE_TYPE, UserType } from "@/lib/enums";
import { toast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { TABLE_INFO, USER_TABLE_CONFIG } from "@/lib/constants";

interface TableSectionProps {
  search: string;
}

const TableSection = ({ search }: TableSectionProps) => {
  const { user } = useUser();
  const { tabs, showMineToggle } =
    USER_TABLE_CONFIG[user?.type || UserType.CLERK];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/${user?.type}/${TABLE_INFO[activeTab].key}?search=${search}`
        );
        console.log(response);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured",
        });
      }
    }
    fetchData();
  }, [search, activeTab]);
  return (
    <div className="h-full flex flex-col overflow-hidden rounded">
      <div className="flex p-4 justify-between items-center bg-blue-200">
        <div className="flex gap-4 items-end">
          {tabs.map((tab) => (
            <TableHeading
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
        {showMineToggle && (
          <div className="flex items-center space-x-2">
            <Switch
              id="show-mine"
              className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-neutral-300 "
            />
            <Label htmlFor="show-mine">Only show mine</Label>
          </div>
        )}
      </div>
      <ResultsTable activeTab={activeTab} />
    </div>
  );
};

export default TableSection;
