import React from "react";
import { Button } from "../ui/button";
import { TABLE_OPTIONS } from "@/lib/enums";

interface TableHeadingProps {
  tab: TABLE_OPTIONS;
  activeTab: TABLE_OPTIONS;
  setActiveTab: React.Dispatch<React.SetStateAction<TABLE_OPTIONS>>;
}

const TableHeading = ({ tab, activeTab, setActiveTab }: TableHeadingProps) => {
  return (
    <div
      className={`
        cursor-pointer duration-150 h-7 flex items-end
        ${
          activeTab == tab
            ? "text-blue-700 text-xl font-bold underline underline-offset-4"
            : "text-gray-600"
        }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </div>
  );
};

export default TableHeading;
