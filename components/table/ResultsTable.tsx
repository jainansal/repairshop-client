import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { useModal } from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { TABLE_TYPE } from "@/lib/enums";
import { TABLE_INFO } from "@/lib/constants";

interface ResultsTableProps {
  activeTab: TABLE_TYPE;
}

const ResultsTable = ({ activeTab }: ResultsTableProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  return (
    <Table className="bg-blue-50">
      <TableCaption>A list of your recent {activeTab}.</TableCaption>
      <TableHeader>
        <TableRow>
          {TABLE_INFO[activeTab].headers.map((header) => (
            <TableHead>{header}</TableHead>
          ))}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          {activeTab == "request" ? (
            <TableCell className="text-right">
              <Button
                variant={"approve"}
                title="Approve"
                className="p-2 mr-2 h-fit"
              >
                <Check />
              </Button>
              <Button variant={"reject"} title="Reject" className="p-2 h-fit">
                <X />
              </Button>
            </TableCell>
          ) : (
            <TableCell className="text-right">Generate Invoice</TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
