"use client";

import React, { useState } from "react";
import TableHeading from "./TableHeading";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ResultsTable from "./ResultsTable";
import { table } from "console";

const TableSection = () => {
  const TABS = ["Customers", "Services", "Repair Persons"];
  const [activeTab, setActiveTab] = useState(TABS[0]);
  return (
    <div className="h-full flex flex-col overflow-hidden rounded">
      <div className="flex p-4 justify-between items-center bg-blue-200">
        <div className="flex gap-4 items-end">
          {TABS.map((tab) => (
            <TableHeading
              key={tab}
              text={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="show-mine"
            className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-neutral-300 "
          />
          <Label htmlFor="show-mine">Only show mine</Label>
        </div>
      </div>
      <ResultsTable activeTab={activeTab} />
    </div>
  );
};

export default TableSection;
