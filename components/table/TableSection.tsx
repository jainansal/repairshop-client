"use client";

import React, { useState } from "react";
import TableHeading from "./TableHeading";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ResultsTable from "./ResultsTable";
import { TABLE_OPTIONS } from "@/lib/enums";

interface TableSectionProps {
  tabs: TABLE_OPTIONS[];
  showMineToggle: boolean;
}

const TableSection = ({ tabs, showMineToggle }: TableSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
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
