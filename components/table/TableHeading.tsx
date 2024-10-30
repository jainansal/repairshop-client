import React from "react";
import { Button } from "../ui/button";

interface TableHeadingProps {
  text: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TableHeading = ({ text, activeTab, setActiveTab }: TableHeadingProps) => {
  return (
    <div
      className={`
        cursor-pointer duration-150 h-7 flex items-end
        ${
          activeTab == text
            ? "text-blue-700 text-xl font-bold underline underline-offset-4"
            : "text-gray-400"
        }`}
      onClick={() => setActiveTab(text)}
    >
      {text}
    </div>
  );
};

export default TableHeading;
