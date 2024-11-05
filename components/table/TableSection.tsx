"use client";

import React, { useEffect, useState } from "react";
import TableHeading from "./TableHeading";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ResultsTable from "./ResultsTable";
import { UserType } from "@/lib/enums";
import { toast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { TABLE_INFO, USER_TABLE_CONFIG } from "@/lib/constants";

interface TableSectionProps {
  search: string;
}

const TableSection = ({ search }: TableSectionProps) => {
  const { user, isAuthenticated } = useUser();
  const { tabs, showMineToggle } =
    USER_TABLE_CONFIG[user?.type || UserType.CLERK];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [content, setContent] = useState([]);
  const [isShowMine, setShowMine] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(
          `/${user?.type}/${TABLE_INFO[activeTab.value].key}?search=${search}`
        );
        setContent(response.data.content);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured",
        });
      }
    }
    if (isAuthenticated) {
      fetchData();
    }
  }, [search, activeTab, user]);
  return (
    <div className="h-full flex flex-col overflow-hidden rounded">
      <div className="flex p-4 justify-between items-center bg-blue-200">
        <div className="flex gap-4 items-end">
          {tabs.map((tab) => (
            <TableHeading
              key={tab.value}
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
              checked={isShowMine}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <Label htmlFor="show-mine">Only show mine</Label>
          </div>
        )}
      </div>
      <ResultsTable activeTab={activeTab} content={content} />
    </div>
  );
};

export default TableSection;
