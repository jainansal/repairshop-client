import React from "react";
import { Button } from "../ui/button";

interface TableHeadingProps {
  text: string;
  isActive: boolean;
}

const TableHeading = ({ text, isActive }: TableHeadingProps) => {
  return (
    <div
      className={`${
        isActive
          ? "text-blue-700 text-xl font-bold underline underline-offset-4"
          : "text-gray-400"
      }`}
    >
      {text}
    </div>
  );
};

export default TableHeading;
