import React from "react";
import TableHeading from "./TableHeading";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import ResultsTable from "./ResultsTable";

const TableSection = () => {
  return (
    <div className="h-full flex flex-col overflow-hidden rounded">
      <div className="flex p-4 justify-between items-center bg-blue-200">
        <div className="flex gap-4 items-end">
          <TableHeading text="Customers" isActive={true} />
          <TableHeading text="Services" isActive={false} />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="show-mine"
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-neutral-300 "
          />
          <Label htmlFor="show-mine">Only show mine</Label>
        </div>
      </div>
      <ResultsTable />
    </div>
  );
};

export default TableSection;
