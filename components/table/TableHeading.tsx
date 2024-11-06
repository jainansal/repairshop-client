import React from "react";
import { Button } from "../ui/button";
import { TableTab } from "@/lib/enums";

interface TableHeadingProps {
  tab: TableTab;
  activeTab: TableTab;
  setActiveTab: React.Dispatch<React.SetStateAction<TableTab>>;
}

const TableHeading = ({ tab, activeTab, setActiveTab }: TableHeadingProps) => {
  return (
    <div
      className={`
        cursor-pointer duration-150 h-7 flex items-end
        ${
          activeTab?.value == tab?.value
            ? "text-blue-700 text-xl font-bold underline underline-offset-4"
            : "text-gray-600"
        }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab.label}
    </div>
  );
};

export default TableHeading;
